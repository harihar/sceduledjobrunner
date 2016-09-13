package com.yestelecom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@Controller
@PropertySource("file:/opt/phoenixjobs/configuration/application.properties")
//Place a file in this location with the environment specific information. A sample file can be found in the resources folder -> _application.properties.
public class ScheduledjobrunnerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScheduledjobrunnerApplication.class, args);
	}

	@RequestMapping("/")
	public String index() {
		return "app/index.html";
	}
}
