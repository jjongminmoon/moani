package com.intro.moani.pages.main;

import com.intro.moani.pages.main.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/main")
public class MainController {

    @Autowired
    private MainService mainService;

    @PostMapping("/mainImage")
    public List<Map<String, Object>> getMainImage(@RequestBody Map<String, Object> requestMap) throws SQLException, Exception {
        return mainService.getMainImage(requestMap);
    }
}
