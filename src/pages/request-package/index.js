import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import email from '../../config/email.json';
import text from '../../config/text.json';

export const RequestPackage = () => {
  const [formData, setFormdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    include_season: "",
    include_game_one: "",
    include_game_two: "",
    include_game_three: "",
    include_game_four: "",
    include_game_five: "",
    include_game_six: "",
    include_game_seven: "",
    include_cooler: "",
    include_chair: "",
    include_table: "",
    include_tent: "",
    include_cocktail_table: "",
    include_side_tent: "",
    cooler_amount: "",
    chair_amount: "",
    table_amount: "",
    tent_amount: "",
    cocktail_table_amount: "",
    side_tent_amount: "",
    lot_number: "",
    spot_number: "",
    additional_comment: "",
    hear_about_us_question: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handlePackageChange = (e) => {
    setFormdata({
      ...formData,
      package_game: e.target.value,
    });
  };

  const handleAddOnChange = (e) => {
      setFormdata({
        ...formData,
        selected_add_on: e.target.value,
      });
    };

  const handleSeason = (e) => {
        setFormdata({
          ...formData,
          include_season: e.target.checked,
          selectedSeason: e.target.checked ? formData.include_season : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

    const handleGameOne = (e) => {
        setFormdata({
          ...formData,
          include_game_one: e.target.checked,
          selectedGameOne: e.target.checked ? formData.include_game_one : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

    const handleGameTwo = (e) => {
        setFormdata({
          ...formData,
          include_game_two: e.target.checked,
          selectedGameTwo: e.target.checked ? formData.include_game_two : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

    const handleGameThree = (e) => {
        setFormdata({
          ...formData,
          include_game_three: e.target.checked,
          selectedGameThree: e.target.checked ? formData.include_game_three : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

    const handleGameFour = (e) => {
        setFormdata({
          ...formData,
          include_game_four: e.target.checked,
          selectedGameFour: e.target.checked ? formData.include_game_four : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

    const handleGameFive = (e) => {
        setFormdata({
          ...formData,
          include_game_five: e.target.checked,
          selectedGameFive: e.target.checked ? formData.include_game_five : "" // Reset selected_add_on if checkbox is unchecked
        });
      };
      
    const handleGameSix = (e) => {
        setFormdata({
          ...formData,
          include_game_six: e.target.checked,
          selectedGameSix: e.target.checked ? formData.include_game_six : "" // Reset selected_add_on if checkbox is unchecked
        });
      };
      
    const handleGameSeven = (e) => {
        setFormdata({
          ...formData,
          include_game_seven: e.target.checked,
          selectedGameSeven: e.target.checked ? formData.include_game_seven : "" // Reset selected_add_on if checkbox is unchecked
        });
      };

  const handleCooler = (e) => {
      setFormdata({
        ...formData,
        include_cooler: e.target.checked,
        selectedCooler: e.target.checked ? formData.include_cooler : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

  const handleCoolerAmount = (e) => {
    setFormdata({
      ...formData,
      cooler_amount: e.target.value,
    });
  };

    const handleChair = (e) => {
      setFormdata({
        ...formData,
        include_chair: e.target.checked,
        selectedChair: e.target.checked ? formData.include_chair : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

    const handleChairAmount = (e) => {
    setFormdata({
      ...formData,
      chair_amount: e.target.value,
    });
  };

    const handleTable = (e) => {
      setFormdata({
        ...formData,
        include_table: e.target.checked,
        selectedTable: e.target.checked ? formData.include_table : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

    const handleTableAmount = (e) => {
    setFormdata({
      ...formData,
      table_amount: e.target.value,
    });
  };

    const handleTent = (e) => {
      setFormdata({
        ...formData,
        include_tent: e.target.checked,
        selectedTent: e.target.checked ? formData.include_tent : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

    const handleTentAmount = (e) => {
    setFormdata({
      ...formData,
      tent_amount: e.target.value,
    });
  };

    const handleCocktailTable = (e) => {
      setFormdata({
        ...formData,
        include_cocktail_table: e.target.checked,
        selectedCocktailTable: e.target.checked ? formData.include_cocktail_table : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

    const handleCocktailTableAmount = (e) => {
    setFormdata({
      ...formData,
      cocktail_table_amount: e.target.value,
    });
  };

    const handleSideTent = (e) => {
      setFormdata({
        ...formData,
        include_side_tent: e.target.checked,
        selectedSideTent: e.target.checked ? formData.include_side_tent : "" // Reset selected_add_on if checkbox is unchecked
      });
    };

const handleSideTentAmount = (e) => {
    setFormdata({
      ...formData,
      side_tent_amount: e.target.value,
    });
  };
  
  
    const [selectedPackageType, setSelectedPackageType] = useState('cub');

    const handlePackageTypeChange = (packageType) => {
      setSelectedPackageType(packageType);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });


  const templateParams = {
    first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    phone_number: formData.phone_number,
    package_type: selectedPackageType,
    include_season: formData.include_season ? (text.packages.season?.name || "") : "",
    include_game_one: formData.include_game_one ? (text.packages.game_one?.name || "") : "",
    include_game_two: formData.include_game_two ? (text.packages.game_two?.name || "") : "",
    include_game_three: formData.include_game_three ? (text.packages.game_three?.name || "") : "",
    include_game_four: formData.include_game_four ? (text.packages.game_four?.name || "") : "",
    include_game_five: formData.include_game_five ? (text.packages.game_five?.name || "") : "",
    include_game_six: formData.include_game_six ? (text.packages.game_six?.name || "") : "",
    include_game_seven: formData.include_game_seven ? (text.packages.game_seven?.name || "") : "",
    include_cooler: formData.include_cooler ? (text.packages.add_ons.cooler?.name || "") : "[-]",
    include_chair: formData.include_chair ? (text.packages.add_ons.chair?.name || "") : "[-]",
    include_table: formData.include_table ? (text.packages.add_ons.table?.name || "") : "[-]",
    include_tent: formData.include_tent ? (text.packages.add_ons.tent?.name || "") : "[-]",
    include_cocktail_table: formData.include_cocktail_table ? (text.packages.add_ons.cocktail_table?.name || "") : "[-]",
    include_side_tent: formData.include_side_tent ? (text.packages.add_ons.side_tent?.name || "") : "[-]",
    cooler_amount: formData.cooler_amount ? (text.packages?.count + formData.cooler_amount || "") : "",
    chair_amount: formData.chair_amount ? (text.packages?.count + formData.chair_amount || "") : "",
    table_amount: formData.table_amount ? (text.packages?.count + formData.table_amount || "") : "",
    tent_amount: formData.tent_amount ? (text.packages?.count + formData.tent_amount || "") : "",
    cocktail_table_amount: formData.cocktail_table_amount ? (text.packages?.count + formData.cocktail_table_amount || "") : "",
    side_tent_amount: formData.side_tent_amount ? (text.packages?.count + formData.side_tent_amount || "") : "",
    lot_number: formData.lot_number,
    spot_number: formData.spot_number,
    additional_comment: formData.additional_comment,
    hear_about_us_question: formData.hear_about_us_question
    };

    emailjs
      .send(
        email.service_id,
        email.template_id,
        templateParams,
        email.user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
     setIsChecked(!isChecked); // Toggle the isChecked state
  };

  const [isLotChecked, setIsLotChecked] = useState(false);

    const handleLotCheckboxChange = () => {
       setIsLotChecked(!isLotChecked); // Toggle the isChecked state
    };

  

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{text.meta.title}</title>
          <meta name="description" content={text.meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{text.packages.select_title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col>
                  <div>
                     <div
                       className={`selectable-box ${selectedPackageType === 'cub' ? 'selected' : ''}`}
                       onClick={() => handlePackageTypeChange('cub')}
                      >
                       {text.packages.form.cub}
                       </div>
                       <div
                          className={`selectable-box ${selectedPackageType === 'vip' ? 'selected' : ''}`}
                          onClick={() => handlePackageTypeChange('vip')}
                        >
                       {text.packages.form.vip}
                     </div>
                   </div>
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id={text.packages.id.first_name}
                    name={text.packages.id.first_name}
                    placeholder={text.packages.form.first_name}
                    value={formData.first_name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id={text.packages.id.last_name}
                  name={text.packages.id.last_name}
                  placeholder={text.packages.form.last_name}
                  value={formData.last_name || ""}
                  type="text"
                  required
                  onChange={handleChange}
                />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id={text.packages.id.email}
                    name={text.packages.id.email}
                    placeholder={text.packages.form.email}
                    value={formData.email || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id={text.packages.id.phone_number}
                    name={text.packages.id.phone_number}
                    placeholder={text.packages.form.phone_number}
                    type="tel"
                    value={formData.phone_number || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>

                { selectedPackageType === 'cub' ?
                <Col>
                 <label htmlFor={text.packages.season.id}>
                    <input
                      id={text.packages.season.id}
                      type="checkbox"
                      checked={formData.include_season}
                      onChange={handleSeason}
                    />{" "}
                    {text.packages.season.name} - ${text.packages.season.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_one.id}>
                    <input
                      id={text.packages.game_one.id}
                      type="checkbox"
                      checked={formData.include_game_one}
                      onChange={handleGameOne}
                    />{" "}
                    {text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_two.id}>
                    <input
                      id={text.packages.game_two.id}
                      type="checkbox"
                      checked={formData.include_game_two}
                      onChange={handleGameTwo}
                    />{" "}
                    {text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_three.id}>
                    <input
                      id={text.packages.game_three.id}
                      type="checkbox"
                      checked={formData.include_game_three}
                      onChange={handleGameThree}
                    />{" "}
                    {text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_four.id}>
                    <input
                      id={text.packages.game_four.id}
                      type="checkbox"
                      checked={formData.include_game_four}
                      onChange={handleGameFour}
                    />{" "}
                    {text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_five.id}>
                    <input
                      id={text.packages.game_five.id}
                      type="checkbox"
                      checked={formData.include_game_five}
                      onChange={handleGameFive}
                    />{" "}
                    {text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_six.id}>
                    <input
                      id={text.packages.game_six.id}
                      type="checkbox"
                      checked={formData.include_game_six}
                      onChange={handleGameSix}
                    />{" "}
                    {text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_cub}
                  </label>
                 <label htmlFor={text.packages.game_seven.id}>
                    <input
                      id={text.packages.game_seven.id}
                      type="checkbox"
                      checked={formData.include_game_seven}
                      onChange={handleGameSeven}
                    />{" "}
                    {text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_cub}
                  </label>
                </Col>
                :
                <Col>
                 <label htmlFor={text.packages.season.id}>
                    <input
                      id={text.packages.season.id}
                      type="checkbox"
                      checked={formData.include_season}
                      onChange={handleSeason}
                    />{" "}
                    {text.packages.season.name} - ${text.packages.season.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_one.id}>
                    <input
                      id={text.packages.game_one.id}
                      type="checkbox"
                      checked={formData.include_game_one}
                      onChange={handleGameOne}
                    />{" "}
                    {text.packages.game_one.date} {text.packages.game_one.name} - ${text.packages.game_one.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_two.id}>
                    <input
                      id={text.packages.game_two.id}
                      type="checkbox"
                      checked={formData.include_game_two}
                      onChange={handleGameTwo}
                    />{" "}
                    {text.packages.game_two.date} {text.packages.game_two.name} - ${text.packages.game_two.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_three.id}>
                    <input
                      id={text.packages.game_three.id}
                      type="checkbox"
                      checked={formData.include_game_three}
                      onChange={handleGameThree}
                    />{" "}
                    {text.packages.game_three.date} {text.packages.game_three.name} - ${text.packages.game_three.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_four.id}>
                    <input
                      id={text.packages.game_four.id}
                      type="checkbox"
                      checked={formData.include_game_four}
                      onChange={handleGameFour}
                    />{" "}
                    {text.packages.game_four.date} {text.packages.game_four.name} - ${text.packages.game_four.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_five.id}>
                    <input
                      id={text.packages.game_five.id}
                      type="checkbox"
                      checked={formData.include_game_five}
                      onChange={handleGameFive}
                    />{" "}
                    {text.packages.game_five.date} {text.packages.game_five.name} - ${text.packages.game_five.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_six.id}>
                    <input
                      id={text.packages.game_six.id}
                      type="checkbox"
                      checked={formData.include_game_six}
                      onChange={handleGameSix}
                    />{" "}
                    {text.packages.game_six.date} {text.packages.game_six.name} - ${text.packages.game_six.price_vip}
                  </label>
                 <label htmlFor={text.packages.game_seven.id}>
                    <input
                      id={text.packages.game_seven.id}
                      type="checkbox"
                      checked={formData.include_game_seven}
                      onChange={handleGameSeven}
                    />{" "}
                    {text.packages.game_seven.date} {text.packages.game_seven.name} - ${text.packages.game_seven.price_vip}
                  </label>
                </Col>
                }
               <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{' '}
                  {text.packages.form.add_on_question}
                </label>
                { isChecked && (
                <Col lg="6" className="form-group">
                <div>
                   <h2>Select your add-ons:</h2>
                   <label htmlFor={text.packages.add_ons.cooler.id}>
                    <input
                      id={text.packages.add_ons.cooler.id}
                      type="checkbox"
                      checked={formData.include_cooler}
                      onChange={handleCooler}
                    />{" "}
                    {text.packages.add_ons.cooler.name} - ${text.packages.add_ons.cooler.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_cooler && (
                      <input
                        id={`${text.packages.add_ons.cooler.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.cooler_amount}
                        onChange={handleCoolerAmount}
                      />
                    )}
                </div>
                <div>
                   <label htmlFor={text.packages.add_ons.chair.id}>
                    <input
                      id={text.packages.add_ons.chair.id}
                      type="checkbox"
                      checked={formData.include_chair}
                      onChange={handleChair}
                    />{" "}
                    {text.packages.add_ons.chair.name} - ${text.packages.add_ons.chair.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_chair && (
                      <input
                        id={`${text.packages.add_ons.chair.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.chair_amount}
                        onChange={handleChairAmount}
                      />
                    )}
                </div>
                <div>
                   <label htmlFor={text.packages.add_ons.table.id}>
                    <input
                      id={text.packages.add_ons.table.id}
                      type="checkbox"
                      checked={formData.include_table}
                      onChange={handleTable}
                    />{" "}
                    {text.packages.add_ons.table.name} - ${text.packages.add_ons.table.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_table && (
                      <input
                        id={`${text.packages.add_ons.table.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.table_amount}
                        onChange={handleTableAmount}
                      />
                    )}
                </div>
                <div>
                   <label htmlFor={text.packages.add_ons.tent.id}>
                    <input
                      id={text.packages.add_ons.tent.id}
                      type="checkbox"
                      checked={formData.include_tent}
                      onChange={handleTent}
                    />{" "}
                    {text.packages.add_ons.tent.name} - ${text.packages.add_ons.tent.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_tent && (
                      <input
                        id={`${text.packages.add_ons.tent.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.tent_amount}
                        onChange={handleTentAmount}
                      />
                    )}
                </div>
                <div>
                   <label htmlFor={text.packages.add_ons.cocktail_table.id}>
                    <input
                      id={text.packages.add_ons.cocktail_table.id}
                      type="checkbox"
                      checked={formData.include_cocktail_table}
                      onChange={handleCocktailTable}
                    />{" "}
                    {text.packages.add_ons.cocktail_table.name} - ${text.packages.add_ons.cocktail_table.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_cocktail_table && (
                      <input
                        id={`${text.packages.add_ons.cocktail_table.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.cocktail_table_amount}
                        onChange={handleCocktailTableAmount}
                      />
                    )}
                </div>
                <div>
                   <label htmlFor={text.packages.add_ons.side_tent.id}>
                    <input
                      id={text.packages.add_ons.side_tent.id}
                      type="checkbox"
                      checked={formData.include_side_tent}
                      onChange={handleSideTent}
                    />{" "}
                    {text.packages.add_ons.side_tent.name} - ${text.packages.add_ons.side_tent.price}{text.packages.form.per_game}
                  </label>
                    {formData.include_side_tent && (
                      <input
                        id={`${text.packages.add_ons.side_tent.id}_amount`}
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.side_tent_amount}
                        onChange={handleSideTentAmount}
                      />
                    )}
                </div>
                </Col> )}
              </Row>
              <Col>
               <label>
                <input
                  type="checkbox"
                  checked={isLotChecked}
                  onChange={handleLotCheckboxChange}
                />{' '}
                  {text.packages.form.lot_number_question}
                </label>
              </Col>
              { isLotChecked && (
              <>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id={text.packages.id.lot_number}
                  name={text.packages.id.lot_number}
                  placeholder={text.packages.form.lot_number}
                  value={formData.lot_number || ""}
                  type="text"
                  onChange={handleChange}
                />
                </Col>
                <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id={text.packages.id.spot_number}
                  name={text.packages.id.spot_number}
                  placeholder={text.packages.form.spot_number}
                  value={formData.spot_number || ""}
                  type="text"
                  onChange={handleChange}
                />
                </Col>
                </>
                )}
              <textarea
                className="form-control rounded-0"
                id={text.packages.id.additional_comment}
                name={text.packages.id.additional_comment}
                placeholder={text.packages.form.additional_comment}
                rows="5"
                value={formData.additional_comment}
                onChange={handleChange}
              ></textarea>
              <textarea
                className="form-control rounded-0"
                id={text.packages.id.hear_about_us_question}
                name={text.packages.id.hear_about_us_question}
                placeholder={text.packages.form.hear_about_us_question}
                rows="5"
                value={formData.hear_about_us_question}
                onChange={handleChange}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};