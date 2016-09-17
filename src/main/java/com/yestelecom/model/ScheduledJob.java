package com.yestelecom.model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

/**
 * Created by harihar on 12/9/16.
 */
@Builder
@Data
public class ScheduledJob {

    private String name;
    private boolean isEnabled;
    private String status;
    private String message;
    private Date lastModified;
    private Long lastModifiedBy;
    private String url;
    private String jobGroup;
}
