package com.yestelecom.service;

import com.yestelecom.dao.RunnableJobDao;
import com.yestelecom.model.RunnableJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by harihar on 12/9/16.
 */
@Service
public class RunnableJobService {

    @Autowired
    private RunnableJobDao runnableJobDao;

    public List<RunnableJob> getJobs(String groupId) {
        return runnableJobDao.getJobs(groupId);
    }
}
