package com.nuni.restcontroller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestcontrollerApplication {

	public static void main(String[] args) {
		// forSchleife();
		// whileSchleife();
		SpringApplication.run(RestcontrollerApplication.class, args);
	}

	public static void whileSchleife() {
		int x = 2;
		int count = 1;

		while (x <= 1000) {
			x *= 2;
			count++;
		}
		System.out.println("x = " + x); // 1024
		System.out.println("count = " + count); // 10
	}

	public static void forSchleife() {
		double sum = 0;
		for (int i = 0; i <= 50; i++) {
			if (i % 2 == 0) {
				sum = sum / 2;
			} else {
				sum += i;
			}
			System.out.println(sum);
		}
	}
}
