package com.coronamap.coronamap.controller.dto;

import com.coronamap.coronamap.domain.Place;
import lombok.Getter;

@Getter
public class PlaceDto {
    private String restaurantName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;

    public PlaceDto(Place entity) {
        this.restaurantName = entity.getRestaurantName();
        this.coordinateX = entity.getCoordinateX();
        this.coordinateY = entity.getCoordinateY();
        this.phoneNumber = entity.getPhoneNumber();
    }
}
