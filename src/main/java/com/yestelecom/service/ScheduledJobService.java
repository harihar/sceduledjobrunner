package com.yestelecom.service;

import com.yestelecom.dao.ScheduledJobDao;
import com.yestelecom.model.ScheduledJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by harihar on 12/9/16.
 */
@Service
public class ScheduledJobService {

    @Autowired
    private ScheduledJobDao scheduledJobDao;
    @Value("${network.jobs.baseurl}")
    private String networkJobBaseUrl;
    @Value("${mw.jobs.baseurl}")
    private String mwJobBaseUrl;
    @Value("${scheduled.jobs.baseurl}")
    private String scheduledJobBaseUrl;
    @Value("${jobs.deployedOnSameServer}")
    private boolean areJobsDeployedOnSameServerAsThisApplication;

    public List<ScheduledJob> getJobs(String groupId, HttpServletRequest request) {
        String baseUrl = getBaseUrl(groupId, request);

        List<ScheduledJob> jobs = scheduledJobDao.getJobs(groupId);
        jobs.stream()
                .forEach(sc -> {
                    String urlWithBaseUrl = baseUrl + sc.getUrl();
                    sc.setUrl(urlWithBaseUrl);
                });
        return jobs;
    }

    private String getBaseUrl(String groupId, HttpServletRequest request) {
        String baseUrl = "";
        if ("MW".equalsIgnoreCase(groupId)) {
            baseUrl = mwJobBaseUrl;
        } else if ("Network".equalsIgnoreCase(groupId)) {
            baseUrl = networkJobBaseUrl;
        } else if ("OTHER_SCHEDULED".equalsIgnoreCase(groupId)) {
            baseUrl = scheduledJobBaseUrl;
        }

        if(areJobsDeployedOnSameServerAsThisApplication) {
            String currentAppServerName = request.getServerName();
            String configuredServerName = baseUrl.substring("http://".length(), baseUrl.lastIndexOf(":"));
            baseUrl = baseUrl.replace(configuredServerName, currentAppServerName);
        }
        return baseUrl;
    }

    public List<ScheduledJob> getAllJobs() {
        return scheduledJobDao.getAllJobs();
    }
}
