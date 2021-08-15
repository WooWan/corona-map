package com.coronamap.coronamap.repository;

import com.coronamap.coronamap.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface PlaceRepository extends JpaRepository<Place,Long> {
}
