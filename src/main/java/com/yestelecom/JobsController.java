package com.yestelecom;

import com.yestelecom.model.RunnableJob;
import com.yestelecom.service.RunnableJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by harihar on 12/9/16.
 */

@RestController
public class JobsController {

    @Autowired
    private RunnableJobService runnableJobService;

    @RequestMapping("/runnablejobs")
    public List<RunnableJob> getJobs(@RequestParam("jobGroupId") String groupId) {
        return runnableJobService.getJobs(groupId);
    }
}
