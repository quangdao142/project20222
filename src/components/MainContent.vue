<script>
export default{
    name:'MainContent',
    methods:{
        
    }
}
</script>

<template>
    <div class="main-content">
        <div class="write-post-container">
            <div class="user-profile">
                <img src="../assets/user.png" alt="">
                <div>
                    <p>Chris Hemsworth</p>
                    <small>Public</small>
                </div>
            </div>
            <div class="post-input-container">
                <textarea name="" id="" rows="3" placeholder="What's on your mind, Chris?"></textarea>
                <div class="add-post-links">
                    <a href=""><img src="../assets/photo.png" alt="">Photo</a>
                </div>
            </div>
        </div>
        <div class="post-container">
            <div class="user-profile">
                <img src="../assets/user.png" alt="">
                <div>
                    <p>Chris Hemsworth</p>
                    <span>June 24 2023</span>
                </div>
            </div>
            <p class="post-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum expedita eius voluptatum iste vitae mollitia optio hic a alias, dolores totam saepe, ea sed doloremque aspernatur 
                voluptatem deserunt ducimus dolorem.<a href="">#lorem</a> <a href="">#isum</a></p>
            <img src="../assets/beach.jpg" alt="" class="post-img">
            <div class="post-row">
                <div class="activity-icon">
                    <div>
                        <img src="../assets/like.png" alt="">100
                    </div>
                    <div>
                        <img src="../assets/comment.png" alt="">100
                    </div>
                </div>
                <div class="post-profile-icon"></div>
            </div>
        </div>
        <button type="button" class="load-more-btn">Load more</button>
    </div>
</template>

<style>
.main-content{
    flex-basis: 50%;
}
.write-post-container{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    color: #626262;
}
.user-profile{
    display: flex;
    align-items: center;
    padding: 20px;
}
.user-profile img{
    width: 45px;
    border-radius: 50%;
    margin-right: 10px;
}
.user-profile p{
    margin-bottom: -5px;
    font-weight: 500;
    color: #464646;
}
.user-profile small{
    font-size: 13px;
}
.post-input-container{
    padding: 0px 70px;

}
.post-input-container textarea{
    width: 100%;
    border-radius: 5px;
    outline: 1px solid #ffffff;
    margin-bottom: 8px;
    padding: 8px;
    background: transparent;
    resize: none;
}
.add-post-links{
    display: flex;
    padding-bottom: 5px;
}
.add-post-links a{
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #626262;
    margin-right: 30px;
    font-size: 13px;
}
.add-post-links a img{
    width: 25px;
    margin-right: 10px;
}
.post-container{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    color: #626262;
    margin: 20px 0px;
}
.user-profile span{
    font-size: 13px;
    color: #9a9a9a;
}
.post-text{
    color: #464646;
    padding: 0px 30px 20px;
    margin: 0px;
}
.post-text a{
    color: #1876f2;
    text-decoration: none;
}
.post-img{
    max-width: 100%;
    border-radius: 5px;
    padding: 0px 20px 0px 20px;

}
.post-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.activity-icon div img{
    width: 30px;
    padding-left: 20px;
}
.activity-icon div{
    display: inline-flex;
    align-items: center;
}
.load-more-btn{
    display: block;
    margin: auto;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #9a9a9a;
    color: #626262;
    background: transparent;
    border-radius: 5px;
}
</style>