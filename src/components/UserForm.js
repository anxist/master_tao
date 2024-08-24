import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            category: "",
            cost: "",
            weight: "",
            volume: "",
            insuranceOrCustoms: "",
            tnvedCode: "",
            photo: null,
            name: "",
            phone: "",
            email: "",
            comment: "",
            errors: {},
            formSubmitted: false,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        this.setState({ photo: event.target.files[0] });
    }

    validateStep1() {
        const { category, cost, weight, volume, tnvedCode } = this.state;
        const errors = {};
        if (!category) errors.category = "Категория товара обязательна";
        if (!cost || isNaN(cost)) errors.cost = "Стоимость груза должна быть числом";
        if (!weight || isNaN(weight)) errors.weight = "Вес груза должен быть числом";
        if (!volume || isNaN(volume)) errors.volume = "Объем груза должен быть числом";
        if (!tnvedCode) errors.tnvedCode = "Код ТН ВЭД обязателен";
        this.setState({ errors });
        return Object.keys(errors).length === 0;
    }

    validateStep2() {
        const { name, phone, email, comment } = this.state;
        const errors = {};
        if (!name) errors.name = "Имя обязательно";
        if (!phone) errors.phone = "Телефон обязателен";
        if (!email) errors.email = "Электронная почта обязательна";
        if (!comment) errors.comment = "Комментарий обязателен";
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Некорректный формат e-mail";
        this.setState({ errors });
        return Object.keys(errors).length === 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateStep1() && this.validateStep2()) {
            this.setState({ formSubmitted: true });
            alert(`Введенные данные: \nКатегория товара: ${this.state.category} \nСтоимость груза: ${this.state.cost} \nВес груза: ${this.state.weight} \nОбъем груза: ${this.state.volume} \nВыбранный вариант: ${this.state.insuranceOrCustoms} \nКод ТН ВЭД: ${this.state.tnvedCode} \nФото: ${this.state.photo ? this.state.photo.name : 'Не выбрано'} \nИмя: ${this.state.name} \nТелефон: ${this.state.phone} \nЭлектронная почта: ${this.state.email} \nКомментарий: ${this.state.comment}`);
        } else {
            this.setState({ formSubmitted: false });
        }
    }

    _next = () => {
        const { currentStep } = this.state;
        if (currentStep === 1 && this.validateStep1()) {
            this.setState(prevState => ({
                currentStep: Math.min(prevState.currentStep + 1, 3)
            }));
        } else if (currentStep === 2 && this.validateStep2()) {
            this.setState(prevState => ({
                currentStep: Math.min(prevState.currentStep + 1, 3)
            }));
        }
    }

    _prev = () => {
        this.setState(prevState => ({
            currentStep: Math.max(prevState.currentStep - 1, 1)
        }));
    }

    renderButton(label, onClick, type = "button", className = "") {
        return <button type={type} className={`form_btn ${className}`} onClick={onClick}>{label}</button>;
    }

    render() {
        const { currentStep, category, cost, weight, volume, insuranceOrCustoms, tnvedCode, photo, name, phone, email, comment, errors, formSubmitted } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {currentStep === 1 && (
                        <ProductInfoStep
                            handleChange={this.handleChange}
                            handleFileChange={this.handleFileChange}
                            category={category}
                            cost={cost}
                            weight={weight}
                            volume={volume}
                            insuranceOrCustoms={insuranceOrCustoms}
                            tnvedCode={tnvedCode}
                            photo={photo}
                            errors={errors}
                            currentStep={currentStep}
                        />
                    )}
                    {currentStep === 2 && (
                        <ContactInfoStep
                            handleChange={this.handleChange}
                            name={name}
                            phone={phone}
                            email={email}
                            comment={comment}
                            errors={errors}
                            currentStep={currentStep}
                        />
                    )}
                    {currentStep === 3 && (
                        <ResultStep formSubmitted={formSubmitted} />
                    )}

                    <div className="form-buttons">
                        {currentStep > 1 && this.renderButton('Назад', this._prev, 'button', 'btn-back')}
                        {currentStep < 3 && this.renderButton('Вперед', this._next)}
                        {currentStep === 3 && this.renderButton('Отправить', this.handleSubmit, 'submit')}
                    </div>
                </form>
            </div>
        );
    }
}

class ProductInfoStep extends React.Component {
    render() {
        const { handleChange, handleFileChange, category, cost, weight, volume, insuranceOrCustoms, tnvedCode, photo, errors, currentStep } = this.props;
        return (
            <div className="form_container">
                <div className="form_container_circle">
                    <div className={`circle circle1 ${currentStep === 1 ? 'active' : ''}`}>1</div>
                    <div className={`circle circle2 ${currentStep === 2 ? 'active' : ''}`}>2</div>
                    <div className={`circle circle3 ${currentStep === 3 ? 'active' : ''}`}>3</div>
                </div>
                <div className="form-group">
                    <div className="form_block">
                        <label>Категория товара</label>
                        <input
                            name="category"
                            type="text"
                            placeholder="Введите категорию товара"
                            value={category}
                            onChange={handleChange}
                            className="input_form1"
                        />
                        {errors.category && <p className="error">{errors.category}</p>}
                    </div>
                    <div className="form_block">
                        <label>Вес груза</label>
                        <input
                            name="weight"
                            type="text"
                            placeholder="Введите вес груза"
                            value={weight}
                            onChange={handleChange}
                            className="input_form1"
                        />
                        {errors.weight && <p className="error">{errors.weight}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form_block">
                        <label>Стоимость груза</label>
                        <input
                            name="cost"
                            type="text"
                            placeholder="Введите стоимость груза"
                            value={cost}
                            onChange={handleChange}
                            className="input_form1"
                        />
                        {errors.cost && <p className="error">{errors.cost}</p>}
                    </div>
                    <div className="form_block">
                        <label>Объем груза</label>
                        <input
                            name="volume"
                            type="text"
                            placeholder="Введите объем груза"
                            value={volume}
                            onChange={handleChange}
                            className="input_form1"
                        />
                        {errors.volume && <p className="error">{errors.volume}</p>}
                    </div>
                </div>
                <div className="form_block">
                    <div className="form_block_radio">
                        <label className="custom-checkbox-label">
                            <input
                                type="radio"
                                name="insuranceOrCustoms"
                                value="insurance"
                                id="insurance"
                                checked={insuranceOrCustoms === 'insurance'}
                                onChange={handleChange}
                                className="custom-checkbox"
                            />
                            <span className="custom-checkbox-box"></span>
                            Страховка
                        </label>
                    </div>
                    <div className="form_block_radio">
                        <label className="custom-radio-label">
                            <input
                                type="radio"
                                name="insuranceOrCustoms"
                                value="customsClearance"
                                checked={insuranceOrCustoms === 'customsClearance'}
                                onChange={handleChange}
                                className="custom-checkbox"
                            />
                            <span className="custom-checkbox-box"></span>
                            Таможенное оформление
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Код ТН ВЭД</label>
                    <input
                        name="tnvedCode"
                        type="text"
                        placeholder="Введите код ТН ВЭД"
                        value={tnvedCode}
                        onChange={handleChange}
                        className="input_form1"
                    />
                    {errors.tnvedCode && <p className="error">{errors.tnvedCode}</p>}
                </div>
                <div className="form-group_photo">
                    {photo && <p className="photo-name">Выбрано: {photo.name}</p>}
                    <input
                        id="photo-upload"
                        name="photo"
                        type="file"
                        className="file-input"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="photo-upload">Загрузите фото</label>
                </div>
            </div>
        );
    }
}

class ContactInfoStep extends React.Component {
    render() {
        const { handleChange, name, phone, email, comment, errors, currentStep } = this.props;
        return (
            <div className="form_container_2">
                <div className="form_container_circle">
                    <div className={`circle circle1 ${currentStep === 1 ? 'active' : ''}`}>1</div>
                    <div className={`circle circle2 ${currentStep === 2 ? 'active' : ''}`}>2</div>
                    <div className={`circle circle3 ${currentStep === 3 ? 'active' : ''}`}>3</div>
                </div>
                <div className="form-group">
                    <div className="form_block">
                        <label>Имя</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Введите имя"
                            value={name}
                            onChange={handleChange}
                            className="input_form2"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                </div>
                <div className="form-group_2">
                    <div className="form_block">
                        <label>Электронная почта</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="example@mail.ru"
                            value={email}
                            onChange={handleChange}
                            className="input_form2"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form_block">
                        <label>Телефон</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            value={phone}
                            onChange={handleChange}
                            className="input_form2"
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Комментарий</label>
                    <textarea
                        name="comment"
                        placeholder="Введите комментарий"
                        value={comment}
                        onChange={handleChange}
                        className="textarea"
                    />
                    {errors.comment && <p className="error">{errors.comment}</p>}
                </div>
            </div>
        );
    }
}

class ResultStep extends React.Component {
    render() {
        const { formSubmitted } = this.props;
        return (
            <div>
                <h2>{formSubmitted ? "Готово" : "Ошибка"}</h2>
            </div>
        );
    }
}

export default UserForm;