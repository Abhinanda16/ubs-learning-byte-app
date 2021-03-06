import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  recommendedKeyword = "azure";
  showNewVideo = false;
  videoList = [
    {
      name: "video1.mp4",
      description: "How does Azure work?",
      keyword: "azure",
      views: 70,
      uploadedOn: "8 days ago",
      imageName: "image8.jpg"
    },
    {
      name: "video2.mp4",
      description: "AWS VS Azure",
      keyword: "azure",
      views: 30,
      uploadedOn: "1 month ago",
      imageName: "image2.jpg"
    },
    {
      name: "video3.mp4",
      description: "Learn Angular",
      keyword: "angular",
      views: 20,
      uploadedOn: "2 month ago",
      imageName: "image3.jpg"
    },
    {
      name: "video4.mp4",
      description: "Cloud Computing",
      keyword: "Cloud",
      views: 50,
      uploadedOn: "2 month ago",
      imageName: "image4.jpg"
    },
    {
      name: "video5.mp4",
      description: "What is Container",
      keyword: "Container",
      views: 70,
      uploadedOn: "1 month ago",
      imageName: "image5.jpg"
    },
    {
      name: "video6.mp4",
      description: "Kubernates vs Docker",
      keyword: "Container",
      views: 10,
      uploadedOn: "7 days ago",
      imageName: "image6.jpg"
    },
    {
      name: "video7.mp4",
      description: "Kubernates Overview",
      keyword: "Container",
      views: 90,
      uploadedOn: "1 month ago",
      imageName: "image7.jpg"
    },
    {
      name: "video9.mp4",
      description: "What is Azure",
      keyword: "azure",
      views: 10,
      uploadedOn: "3 days ago",
      imageName: "image9.jpg"
    }
  ];

  newVideoObj = {
    name: "video8.mp4",
    description: "hadoop",
    keyword: "Container",
    views: 0,
    uploadedOn: "Just now",
    imageName: "image8.jpg"
  };

  ngOnInit() {
    this.videoList.push(this.newVideoObj);
    setInterval(()=>{ 
      var video = document.createElement('video');
      video.src = 'https://learningbytecdnendpoint.azureedge.net/'+this.newVideoObj.name;
      video.oncanplaythrough = () => {
        this.showNewVideo = true;
        console.log("oncanplaythrough");
      };
      video.onerror = () => {
        this.showNewVideo = false;
        console.log("onerror");
      }
    }, 3000);
  }

  sortedVideoList() {
    return this.videoList.sort((a,b)=>b.views-a.views);
  }

  recommendedVideoList() {
    return this.videoList.filter(video=> video.keyword==this.recommendedKeyword);
  }

  newlyAddedVideoList() {
    return this.videoList.filter(video=> video.name==this.newVideoObj.name);
  }

  onVideoClick(video) {
    this.recommendedKeyword = video.keyword;
    let clickedVideoElement = <HTMLVideoElement>(document.getElementById(video.name));
    if(!clickedVideoElement.paused) {
      for(let vid of this.videoList) {
        if(vid.name==video.name) {
            vid.views = vid.views + 1;
        } else {
          let videoElement = <HTMLVideoElement>(document.getElementById(vid.name));
          videoElement && videoElement.pause();
        }
      }
    }
  }

}
