(function () {

    const forms = document.forms;
    const orderForm = forms.orderForm;

    const fnameElLi = orderForm.fname;
    const lnameElLi = orderForm.lname;
    const vegiElLi = orderForm.yesno;
    const dishElLi = orderForm.dish;
    const orderButton = orderForm.orderButton;

    //console.log(forms);

    orderButton.addEventListener("click", showInput);

    function showInput(e) {
        e.preventDefault();

        const ulElement = document.createElement("ul");
        const nameLi = document.createElement("li");
        const lnameLi = document.createElement("li");
        const vegiLi = document.createElement("li");
        const dishLi = document.createElement("li");

        if (fnameElLi.value.trim() == "" || lnameElLi.value.trim() == "") {
            document.getElementById("validation").innerHTML = "Please input ALL fields.";
            if (fnameElLi.value.trim() == "") {
                var element = document.getElementById("fname");
                element.classList.add("badvalidation");
            }
            if (lnameElLi.value.trim() == "") {
                var element = document.getElementById("lname");
                element.classList.add("badvalidation");
            }
        } else {
            nameLi.innerHTML = fnameElLi.value;
            lnameLi.innerHTML = lnameElLi.value;
            vegiLi.innerHTML = vegiElLi.value;
            dishLi.innerHTML = dishElLi.value;

            ulElement.append(nameLi);
            ulElement.append(lnameLi);
            ulElement.append(vegiLi);
            ulElement.append(dishLi);
            document.getElementById("orderinfo").append(ulElement);
            document.getElementById("validation").innerHTML = ""
        }
    }
}());