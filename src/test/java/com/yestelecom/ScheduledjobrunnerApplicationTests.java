package com.yestelecom;

import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(JUnit4.class)
public class ScheduledjobrunnerApplicationTests {

	@Test
	public void contextLoads() {
		String baseUrl = "http://192.168.172.53:8085/mccs/";
		String currentAppServerName = "192.168.172.99";
		String configuredServerName = baseUrl.substring("http://".length(), baseUrl.lastIndexOf(":"));
		baseUrl = baseUrl.replace(configuredServerName, currentAppServerName);

		assertEquals("http://192.168.172.99:8085/mccs/", baseUrl);
	}

}
