package com.example.backend.entity.service.impl;

import com.example.backend.entity.dao.IPlaceDao;
import com.example.backend.entity.models.Place;
import com.example.backend.entity.service.IPlaceService;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class PlaceService implements IPlaceService {
    @Autowired
    private IPlaceDao placeDao;
    @Override
    public List<Place> getAll() {
        return (List<Place>)placeDao.findAll();
    }

    @Override
    public Place getOne(long id) {
        return placeDao.findById(id).get();
    }

    @Override
    public void post(Place place) {
        placeDao.save(place);
    }

    @Override
    public void put(Place place, long id) {
        placeDao.findById(id).ifPresent((x)->{
            place.setId(id);
            placeDao.save(place);
        });
    }

    @Override
    public void delete(long id) {
        placeDao.deleteById(id);
    }

    @Override
    public ResponseEntity<ByteArrayResource> exportInvoice(int idPlace) {
            try{
                final File logo = ResourceUtils.getFile("classpath:images/logo.png");
                final File file = ResourceUtils.getFile("classpath:templates/TouristPlaces.jasper");
                final JasperReport report = (JasperReport) JRLoader.loadObject(file);

                final HashMap<String, Object> parameters = new HashMap<>();
                parameters.put("Logo", logo);
                parameters.put("listPlaces", new JRBeanCollectionDataSource((Collection<?>) this.placeDao.findById(idPlace)));
                JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());
                byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
                String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
                StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
                ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                        .filename(stringBuilder.append(1)
                                .append("generateDate:")
                                .append(sdf)
                                .append(".pdf")
                                .toString())
                        .build();
                HttpHeaders headers = new HttpHeaders();
                headers.setContentDisposition(contentDisposition);
                return ResponseEntity.ok().contentLength((long) reporte.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .headers(headers)
                        .body(new ByteArrayResource(reporte));
            }
            catch(Exception e){
                e.printStackTrace();
            }
            return ResponseEntity.noContent().build();
        }
    }
