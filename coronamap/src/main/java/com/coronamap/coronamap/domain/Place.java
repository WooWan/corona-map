package com.coronamap.coronamap.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Place {

    @Id
    @GeneratedValue
    @Column(name= "place_id")
    private Long id;

    private String restaurantName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;

    @Builder
    public Place(String restaurantName,double coordinateX, double coordinateY, String phoneNumber){
        this.restaurantName = restaurantName;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.phoneNumber = phoneNumber;
    }
}
