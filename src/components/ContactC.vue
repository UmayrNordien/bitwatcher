<template>
  <div>
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
            </div>
            <div class="screen-header-right">
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">
                <div class="rating">
                  <form class="rating-form">
                    <label for="super-happy" class="lb">
                      <input type="radio" name="rating" class="super-happy" id="super-happy" value="super-happy">
                      <svg class="svg" viewBox="0 0 24 24">
                        <path
                          d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                        </path>
                      </svg>
                    </label>
                    <label for="neutral" class="lb">
                      <input type="radio" name="rating" class="neutral" id="neutral" value="neutral">
                      <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1" width="100%" height="100%" viewBox="0 0 24 24">
                        <path
                          d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z">
                        </path>
                      </svg>
                    </label>
                    <label for="super-sad" class="lb">
                      <input type="radio" name="rating" class="super-sad" id="super-sad" value="super-sad">
                      <svg class="svg" viewBox="0 0 24 24">
                        <path
                          d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z">
                        </path>
                      </svg>
                    </label>
                  </form>
                </div>
                CONTACT INFO : +065 557 8205
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Name">
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Email">
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Contact">
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="Message">
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">CANCEL <i class="bi bi-x-circle"></i></button>
                  <button class="app-form-button">SEND <i class="bi bi-send"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, button, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  background: #252525;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  opacity: 1;
  background: repeating-linear-gradient(45deg, #f9c317, #f9c317 12.5px, #252525 12.5px, #252525 62.5px);
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}



.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #f9c317;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: none;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #f9c317;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #888;
}

.app-form-control:focus {
  border-bottom-color: #888;
}

.app-form-button {
  background: none;
  border: none;
  color: #f9c317;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #ffffff;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}

.rating {
  margin-bottom: 70px;
  cursor: pointer;
}

.card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
  background-color: rgb(255, 255, 255);
  padding: 0.8rem;
  width: 33rem;
}

.rating-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.4rem 0.8rem;
  width: 100%;
}

.rating {
  background-color: #202020;
  padding: 0.4rem 0.4rem 0.1rem 0.4rem;
  border-radius: 2.2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
}

.rating-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.svg {
  fill: rgb(242, 242, 242);
  height: 3.6rem;
  width: 3.6rem;
  margin: 0.2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.rating-form-2 svg {
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
}

#radios label {
  position: relative;
}

.super-happy, [type="radio"] {
  position: absolute;
  opacity: 0;
}

.input ,[type="radio"] + svg {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.super-happy[class="super-happy"]:hover + svg,
.super-happy[class="super-happy"]:checked + svg,
.super-happy[class="super-happy"]:focus + svg {
  fill: rgb(0, 204, 79);
  transition: 1.5s;
}

.neutral[class="neutral"]:hover + svg,
.neutral[class="neutral"]:checked + svg,
.neutral[class="neutral"]:focus + svg {
  fill: rgb(232, 214, 0);
  transition: 1.5s;
}

.super-sad[class="super-sad"]:hover + svg,
.super-sad[class="super-sad"]:checked + svg,
.super-sad[class="super-sad"]:focus + svg {
  fill: rgb(239, 42, 16);
  transition: 1.5s;
}


</style>