package com.yestelecom;

import com.yestelecom.model.ScheduledJob;
import com.yestelecom.service.ScheduledJobService;
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
    private ScheduledJobService scheduledJobService;

    @RequestMapping("/runnablejobs")
    public List<ScheduledJob> getJobs(@RequestParam("jobGroupId") String groupId) {
        return scheduledJobService.getJobs(groupId);
    }
}
