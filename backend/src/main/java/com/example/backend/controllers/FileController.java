package com.example.backend.controllers;

import com.example.backend.entity.service.IFileService;
import com.example.backend.playload.FileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    private IFileService fileService;
    @Value("${project.image}")
    private String path;
    @PostMapping("/upload")
    public ResponseEntity<FileResponse> fileUpload(@RequestParam("image") MultipartFile image){

        String fileName = null;
        try {
            fileName = this.fileService.uploadImage(path, image);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new FileResponse(null, "Image is not succesfully uploaded :("), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new FileResponse(fileName, "Image is succesfully uploaded!"), HttpStatus.OK);
    }

}
