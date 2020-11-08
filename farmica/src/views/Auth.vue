<template>
    <div id="auth">
        <p>This is the auth page</p>
        <div id="signup-section" col="xs">
            <b-card border-variant="info" id="signup-card" header="Sign Up"  v-show="true">
                <b-form id="signup-form">
                    <b-form-group id="name-group" label="Name:" label-for="name-group" >
                        <b-form-input id="name" v-model="form.name" placeholder="Enter you name"></b-form-input>
                    </b-form-group>
                    <b-form-group id="email-group" label="Email Address:" label-for="email-group"  description="We will never share your email with anyone">
                        <b-form-input id="email" type="email" v-model="form.email" placeholder="Enter you email address"></b-form-input>
                    </b-form-group>
                    <b-form-group id="phone-group" label="Mobile Phone No:" label-for="phone-group" description="Format:  +254XXXXXXXXX">
                        <b-form-input id="phone" v-model="form.phone" placeholder="Enter you Phone number"></b-form-input>
                    </b-form-group>
                    <b-form-group id="user-group" label="Type of user:" label-for="user-group">
                        <b-form-select id="userType" v-model="form.userType" :options="userTypes">

                        </b-form-select>
                        <b-form-group id="pass-group" label="Password" label-for="pass-group" description=" (8 characters with a mixture of alphanumeric characters)">
                        <b-form-input type="password"></b-form-input>
                    </b-form-group>
                    </b-form-group>
                    <b-button class=submit-btn type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-card>
        </div>
        <div id="login-section">
            <b-card border-variant="info" id="login-card" header="Login" v-show="false" >
                <b-form id="login-form">
                    <b-form-group id="email-group" label="Email Address:" label-for="email-group">
                        <b-form-input id="email" type="email" v-model="form.email" placeholder="Enter you email address"></b-form-input>
                    </b-form-group>
                    <b-form-group id="pass-group" label="Password" label-for="pass-group">
                        <b-form-input type="password"></b-form-input>
                    </b-form-group>
                    <b-button class=submit-btn type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                email:'',
                phone:'',
                userType:null,
                checked:[]
            },
            userTypes:[
                { text:"Select one", value:null},
                "Farmer",
                "Business",
                "Other"
            ],
            show: true,
        }
    }
    
}
</script>

<style>
#signup-section,  #login-section{
    position: relative;
    z-index: 0;
    margin: 10% 40% 15% 30% ;
    padding: 0;
}
#signup-card, #login-card {
    width: 400px;
    position: relative;
    z-index: 1;
    float: right;
}
.card-header {
    text-align: center;
}
.submit-btn {
    float: right;
}
</style>