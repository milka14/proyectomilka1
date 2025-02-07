package com.gadpalenque.serverradiomilka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ServerRadioMilkaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerRadioMilkaApplication.class, args);
	}

}
