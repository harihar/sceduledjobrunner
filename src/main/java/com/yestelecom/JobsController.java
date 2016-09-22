package com.yestelecom;

import com.yestelecom.model.ScheduledJob;
import com.yestelecom.service.ScheduledJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by harihar on 12/9/16.
 */

@RestController
public class JobsController {

    @Autowired
    private ScheduledJobService scheduledJobService;

    @RequestMapping("/runnablejobs")
    public List<ScheduledJob> getJobs(@RequestParam(name = "jobGroupId", required = false) String groupId, HttpServletRequest request) {
        if(StringUtils.isEmpty(groupId)) {
            return scheduledJobService.getAllJobs();
        }else {
            return scheduledJobService.getJobs(groupId, request);
        }
    }
}
