var slider2 = {
    dogUrls: [],
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    slideImg: document.getElementById("image"),
    currentImgIndex: 0,
    start: function() {
        var that = this;
        var onPrevBtnClickWrapper = function(e) { 
            that.onPrevBtnClick(e);
        };
        var onNextBtnClickWrapper = function(e) { 
            that.onNextBtnClick(e);
        };
        this.prevBtn.addEventListener("click", onPrevBtnClickWrapper);
        this.nextBtn.addEventListener("click", onNextBtnClickWrapper);
        this.dogUrls.push ("https://petkeen.com/wp-content/uploads/2021/11/rottweiler-dog-looking-at-the-camera_Edoma_Shutterstock.jpg");
        this.dogUrls.push ("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F11%2F10%2Frottweiler-sunning-in-grass-220034514-2000.jpg");
        this.dogUrls.push ("https://images.ctfassets.net/nx3pzsky0bc9/6mRfYbU3ytwz9wFtoSwBUB/fdd7c89096207d9442bcdac736ddb4b1/rottweiler.jpg");
        this.dogUrls.push ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNam1RP6F6Rl5f9iJZYOLEg_ok-9Wzou7cg&usqp=CAU");
        this.dogUrls.push ("https://geniusvets.s3.amazonaws.com/gv-dog-breeds/rottweiler-5.jpg");
        this.prevBtn.disabled = true;
        this.slideImg.src = this.dogUrls[this.currentImgIndex];
    },
    onPrevBtnClick: function(e) {
        this.currentImgIndex--;
        this.nextBtn.disabled = false; 
        if (this.currentImgIndex == 0) {
            this.prevBtn.disabled = true;
        }
        this.slideImg.src = this.dogUrls[this.currentImgIndex];
    },
    onNextBtnClick: function(e) {
        this.currentImgIndex++;
        this.prevBtn.disabled = false;
        if (this.currentImgIndex === (this.dogUrls.length-1)) {
            this.nextBtn.disabled = true;
        }
        this.slideImg.src = this.dogUrls[this.currentImgIndex];
    }
};
