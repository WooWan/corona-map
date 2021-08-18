package com.coronamap.coronamap.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@Entity
public class Place {

    @Id
    @GeneratedValue
    @Column(name= "place_id")
    private Long id;

    private String placeName;
    private String addressName;
    private double coordinateX;
    private double coordinateY;
    private String phoneNumber;
    private LocalDate date;

    @Builder
    public Place(String placeName, String addressName,double coordinateX, double coordinateY, String phoneNumber, LocalDate date){
        this.placeName = placeName;
        this.addressName = addressName;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }
}
