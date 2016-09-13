package com.yestelecom.model;

import lombok.Builder;
import lombok.Data;

/**
 * Created by harihar on 12/9/16.
 */
@Builder
@Data
public class RunnableJob {
    private long id;
    private String name;
    private String url;
    private String group;
}
