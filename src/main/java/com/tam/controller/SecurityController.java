package com.tam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SecurityController {
	@RequestMapping("/security/login/form")
	public String loginForm( Model model) {
		model.addAttribute("message","Xin vui lòng đăng nhập");
		return "security/login";
	}
	@RequestMapping("/security/login/success")
	public String loginSuccess( Model model) {
		model.addAttribute("message","Bạn đã đăng nhập thành công");
		return "security/login";
	}
	@RequestMapping("/security/login/erorr")
	public String loginErorr( Model model) {
		model.addAttribute("message","Quyền đăng nhập đã thất bại");
		return "security/login";
	}
	@RequestMapping("/security/unauthoried")
	public String unauthoried( Model model) {
		model.addAttribute("message","Bạn không có quyền");
		return "security/login";
	}
	@RequestMapping("/security/logoff/success")
	public String logoff( Model model) {
		model.addAttribute("message","Bạn đăng xuất thành công ");
		return "security/login";
	}
}
