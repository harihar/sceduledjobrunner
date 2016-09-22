package com.yestelecom.service;

import com.yestelecom.dao.ScheduledJobDao;
import com.yestelecom.model.ScheduledJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

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

    public List<ScheduledJob> getJobs(String groupId) {
        String baseUrl = getBaseUrl(groupId);

        List<ScheduledJob> jobs = scheduledJobDao.getJobs(groupId);
        jobs.stream()
                .forEach(sc -> {
                    String urlWithBaseUrl = baseUrl + sc.getUrl();
                    sc.setUrl(urlWithBaseUrl);
                });
        System.out.println("Hello");
        return jobs;
    }

    private String getBaseUrl(String groupId) {
        String baseUrl = "";
        if ("MW".equalsIgnoreCase(groupId)) {
            baseUrl = mwJobBaseUrl;
        } else if ("Network".equalsIgnoreCase(groupId)) {
            baseUrl = networkJobBaseUrl;
        } else if ("OTHER_SCHEDULED".equalsIgnoreCase(groupId)) {
            baseUrl = scheduledJobBaseUrl;
        }
        return baseUrl;
    }

    public List<ScheduledJob> getAllJobs() {
        return scheduledJobDao.getAllJobs();
    }
}
