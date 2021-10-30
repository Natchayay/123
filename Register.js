import React from 'react'

function Register() {
    return(
        <div class='Register'>
            <div>
                <h1 class='Name'>Cardiac center</h1>
                <form>
                    <h2 class='managment'>MANAGEMENT</h2>
                    <h3 class='main1'>OVERVIEW</h3>
                    <br/>
                    <h4 class='manu1'>STATISTIC</h4>
                    <br/>
                    <h5 class='manu2'>REGISTER</h5>
                    <br/>
                    <h6 class='main2'>PRESRIPTION</h6>
                    <br/>
                    <h7 class='manu3'>ORDER</h7>
                    <br/>
                    <h8 class='manu4'>REVIEW</h8>
                </form>
                    <div class='status'>     
                </div>
            </div>
        <div class='Register1'>
            <h1 class='Registerp'>Register Patient</h1>
                <div class='sub'>
                    <div>
                        <h1 class='subject1'>HN </h1> 
                        <br />
                        <h2 class='subject2'>Name </h2>
                    </div> 

                    <div class='textbox2'>
                        <input type='text' v-model='HN'></input> 
                        <br/><br/><br/>
                        <input type='text' v-model='Name'></input>
                    </div>

                    <div class='chack'>
                        <input type='radio' v-model='Gender'></input>&nbsp;&nbsp;
                        <p1>Male</p1>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='radio'></input>&nbsp;&nbsp;
                        <p2>Female</p2>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Register;