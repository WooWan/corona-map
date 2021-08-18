package com.coronamap.coronamap.repository;

import com.coronamap.coronamap.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place,Long> {
}
