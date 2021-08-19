package com.coronamap.coronamap.controller.dto;

import com.coronamap.coronamap.domain.Place;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class PlaceDto {
    private Long id;
    private String placeName;
    private String addressName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;
    private LocalDate date;

    public PlaceDto(Place entity) {
        this.id = entity.getId();
        this.placeName = entity.getPlaceName();
        this.addressName = entity.getAddressName();
        this.coordinateX = entity.getCoordinateX();
        this.coordinateY = entity.getCoordinateY();
        this.phoneNumber = entity.getPhoneNumber();
        this.date = entity.getDate();
    }
}
