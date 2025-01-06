package com.intro.moani.pages.main;

import com.intro.moani.pages.main.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MainController {

    @Autowired
    private MainService mainService;

    @GetMapping("/menuList")
    public List<Map<String, Object>> getMenuList(Map<String, Object> requestMap) throws SQLException, Exception {
        return mainService.getMenuList(requestMap);
    }
}
