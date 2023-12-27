package com.tam.controller;

import java.util.List;
import java.util.Optional;

import com.tam.entity.Product;
import com.tam.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class ProductController {
	@Autowired
	ProductService productService;
	
	@RequestMapping("/product/list")
	public String list(Model model ,@RequestParam("cid")Optional<String>cid) {
		if (cid.isPresent()) {
			List<Product> list=productService.findByCategoryId(cid.get());
			model.addAttribute("items",list);
 		}else {
			List<Product> list= productService.findAll();
			model.addAttribute("items",list);
		}
		
		return "product/list";
	}
	@RequestMapping("/product/detail/{id}")
	public String detail(Model model, @PathVariable("id")Integer id) {
		Product item = productService.findById(id);
		model.addAttribute("item",item);
//		System.out.println("Sản Phẩm Cùng Loại: "+item.getCategory().getProducts());
		return "product/detail";
	}
	
}
