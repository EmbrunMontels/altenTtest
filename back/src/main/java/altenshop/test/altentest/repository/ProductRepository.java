package altenshop.test.altentest.repository;

import altenshop.test.altentest.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
