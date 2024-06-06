import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { Container, Row, Col } from "react-bootstrap"
import { Category } from "@components/eCommerce"
export default function Categories() {
  const dispatch = useAppDispatch()
  const { loading, error, records } = useAppSelector(state => state.categories);
  useEffect(() => {
    dispatch(actGetCategories())
  }, [dispatch]);
  const categoriesList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
      <Category {...record} />
    </Col>
  ))
  : "No categories available at the moment. Please try again later."
  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  )
}
