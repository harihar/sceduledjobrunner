package com.yestelecom;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by harihar on 11/9/16.
 */
@Configuration
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("bower_components/**/**").addResourceLocations("static/app/bower_components/");
//        registry.addResourceHandler("assets/**/**").addResourceLocations("static/app/assets/");
//        registry.addResourceHandler("components/**/**").addResourceLocations("static/app/components/");
//        registry.addResourceHandler("data/**/**").addResourceLocations("static/app/data/");
    }
}
