package com.intro.mout.pages.common;

import com.intro.mout.pages.common.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/common")
public class CommonController {

    @Autowired
    private CommonService commonService;

    @GetMapping("/menuList")
    public List<Map<String, Object>> getMenuList() throws SQLException, Exception {
        return commonService.getMenuList();
    }
}
