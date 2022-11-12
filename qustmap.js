//Dijkstra单源最短路径
var PathToEnd = new Array(13);

function dijkstra(path,index){
    var m = path && path.length;
    var n = m && path[0].length;
    if(m && n && m===n && index < n){
        //初始化distance
        var dis = [];
        var visited = [];//用于标识index号至其他顶点的距离是否确定
        for(var i = 0; i < n; ++i){
            dis.push(path[index][i]);
            visited.push(false)
            PathToEnd[i] = -1;
        }
        visited[index] = true;


        for(i = 0;i < n;i++){
            var minIndex, min = Infinity;
            //找出剩余的不确定的点到index最短的距离对应的索引
            for(var j = 0; j < n; ++j){
                if(!visited[j] && dis[j] < min){
                    minIndex = j;
                    min = dis[j];
                }
            }
            visited[minIndex] = true;//标识index到此顶点的距离已经确认
            for(var k = 0; k < n; ++k){
                //判断minIndex到k之间有无道路
                if(!visited[k] && path[minIndex][k] < Infinity){
                    //更新distance
                    if(dis[k] > dis[minIndex] + path[minIndex][k]){
                        dis[k] = dis[minIndex] + path[minIndex][k];
                        PathToEnd[k] = minIndex;
                    }
                }
            }
        }
        return dis;
    }
}

//结点信息
var pointName = [
    "第一教学楼",
    "学生公寓2号楼",
    "奥运餐厅",
    "逸夫图书馆",
    "风味餐厅",
    "大学医院",
    "篮球场",
    "羽毛球馆",
    "西门",
    "北门",
    "东门",
    "东南",
    "信息楼",
    "北田径运动场",
    "南足球场",
    "月亮湖",
    "科学楼",
    "第三教学楼",
    "人文楼",
];
//结点经纬度
var pointCord = [
    [116.485557,39.88364],  // 第一教学楼 116.485557,39.88364
    [116.485463,39.884595], // 学生公寓2号楼 116.485463,39.884595
    [116.488608,39.879597], // 奥运餐厅 116.488608,39.879597
    [116.486281,39.880736], // 逸夫图书馆 116.486281,39.880736
    [116.486281,39.880736], // 风味餐厅 116.486281,39.880736
    [116.488665,39.885073], // 大学医院 116.488665,39.885073
    [116.489414,39.881553], // 篮球场 116.489414,39.881553
    [116.491533,39.878498], // 羽毛球馆 116.491533,39.878498
    [116.484255,39.883194], // 西门 116.484255,39.883194
    [116.488396,39.885132], // 北门 116.488396,39.885132
    [116.490588,39.883838], // 东门 116.490588,39.883838
    [116.492384,39.87765],  // 东南 116.492384,39.87765
    [116.484708,39.880207], // 信息楼 116.492384,39.87765
    [116.489423,39.883043], // 北田径运动场 116.489423,39.883043
    [116.489823,39.880456], // 南足球场 116.489823,39.880456
    [116.492413,39.879658], // 月亮湖 116.492413,39.879658
    [116.485338,39.878669], // 科学楼 116.485338,39.878669
    [116.487818,39.881328], // 第三教学楼 3116.487818,39.881328
    [116.481725,39.872158]  // 人文楼 116.481725,39.872158
]
//邻接矩阵
var INF = 99999;
var path = [
    [0  ,160,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF,INF],
    [160,0  ,328,563,INF,INF,INF,INF,INF,INF,INF,INF,368,80 ,INF,INF,INF,INF,INF],
    [INF,328,0  ,214,308,INF,INF,INF,INF,INF,INF,INF,348,189,INF,INF,INF,INF,INF],
    [INF,563,214,0  ,100,260,INF,INF,INF,INF,179,INF,INF,INF,INF,60 ,INF,50 ,INF],
    [INF,INF,308,100,0  ,INF,INF,INF,INF,161,336,INF,INF,INF,200,INF,INF,100,INF],
    [INF,INF,INF,260,INF,0  ,345,INF,406,INF,INF,INF,INF,INF,INF,230,100,267,INF],
    [INF,INF,INF,INF,INF,345,0  ,292,INF,INF,INF,INF,INF,INF,INF,INF,345,INF,20 ],
    [INF,INF,INF,INF,INF,INF,292,0  ,INF,INF,INF,164,INF,INF,INF,INF,INF,INF,310],
    [INF,INF,INF,INF,INF,406,INF,INF,0  ,INF,404,INF,INF,INF,INF,INF,50 ,INF,50],
    [INF,INF,INF,INF,161,INF,INF,INF,INF,0  ,392,INF,410,INF,INF,INF,INF,INF,INF],
    [INF,INF,INF,179,336,INF,INF,INF,404,392,0  ,INF,INF,INF,INF,INF,260,100,INF],
    [INF,INF,INF,INF,INF,INF,INF,164,INF,INF,INF,0  ,INF,INF,INF,INF,INF,INF,INF],
    [INF,368,348,INF,INF,INF,INF,INF,INF,410,INF,INF,0  ,210,INF,INF,INF,INF,INF],
    [INF,80 ,189,INF,INF,INF,INF,INF,INF,INF,INF,INF,210,0  ,230,INF,INF,INF,INF],
    [INF,INF,INF,INF,200,INF,INF,INF,INF,INF,INF,INF,INF,230,0  ,140,INF,INF,INF],
    [INF,INF,INF,60 ,INF,230,INF,INF,INF,INF,INF,INF,INF,INF,140,0  ,INF,INF,INF],
    [INF,INF,INF,INF,INF,100,345,INF,50 ,INF,260,INF,INF,INF,INF,INF,0  ,INF,100],
    [INF,INF,INF,50 ,100,267,INF,INF,INF,INF,100,INF,INF,INF,INF,INF,INF,0  ,INF],
    [INF,INF,INF,INF,INF,INF,20 ,310,50 ,INF,INF,INF,INF,INF,INF,INF,100,INF,0  ]
];

//给select添加选项text
function addSelect(id, text) {
    var select_node = document.getElementById(id);
    var option = document.createElement("option");
    option.text= text;
    try{
        // 对于更早的版本IE8
        select_node.add(option,select_node.options[null]);
    }catch (e){
        select_node.add(option,null);
    }
}

for(var i = 0; i < pointName.length; ++i) {
    addSelect("startnode", pointName[i]);
    addSelect("endnode", pointName[i]);
}

//百度地图-MapV-API
var map = new BMap.Map("container",{
    enableMapClick: false
});
var point = new BMap.Point(116.489414,39.881553);
map.centerAndZoom(point, 17);
map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

//Marker标记
var marker = new Array();
for(var i = 0; i < pointName.length; ++i) {
    var point = new BMap.Point(pointCord[i][0],pointCord[i][1]);//默认  可以通过Icon类来指定自定义图标
    marker[i] = new BMap.Marker(point);
    var label = new BMap.Label(pointName[i],{offset:new BMap.Size(20,-10)});//标注标签
    marker[i].setLabel(label)//设置标注说明
    map.addOverlay(marker[i]);
}
var mapvLayer;
function DisplayPath(StartIndex,EndIndex) {
    var data = [];
    var StartPoint = pointCord[StartIndex];
    var EndPoint = pointCord[EndIndex];
    console.log("StartPoint: " + StartPoint);
    console.log("EndPoint: " + EndPoint);

    //获取最短路径
    var p = EndIndex;
    console.log(p);
    while(PathToEnd[p] != -1){
        StartPoint = pointCord[PathToEnd[p]];
        EndPoint = pointCord[p];
        data.push({
            geometry: {
                type: 'LineString',
                coordinates: [
                    StartPoint,
                    EndPoint
                ],
            },
            count: 30
        });
        console.log(PathToEnd[p]);
        p = PathToEnd[p];
    }
    console.log(StartIndex);
    StartPoint = pointCord[StartIndex];
    EndPoint = pointCord[p];
    data.push({
        geometry: {
            type: 'LineString',
            coordinates: [
                StartPoint,
                EndPoint
            ],
        },
        count: 30
    });

    var dataSet = new mapv.DataSet(data);
    var options = {
        strokeStyle: 'rgba(53,57,255,0.5)',
        globalCompositeOperation: 'lighter',
        shadowColor: 'rgba(53,57,255,0.2)',
        shadowBlur: 3,
        lineWidth: 3.0,
        draw: 'simple',
        fillStyle: 'rgba(255, 50, 50, 0.6)'
    }
    if(mapvLayer == null){
        mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    } else {
        //先清除上一个图层
        mapvLayer.hide();
        mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    }

}

var button = document.getElementById("button");
button.addEventListener("click", function () {
    if (button.click == false) {
        return;
    }

    var StartIndex = startnode.selectedIndex; //起点的索引值
    var StartValue = startnode.options[StartIndex].value; //起点的信息
    var EndIndex = endnode.selectedIndex; //终点的索引值
    var EndValue = endnode.options[EndIndex].value; //终点的信息
    console.log("起点：" + StartIndex + "  " + StartValue);
    console.log("终点：" + EndIndex + "  " + EndValue);

    if(StartIndex == EndIndex) {
        alert("起点和终点不能为同一点！");
        return;
    }

    PathArray = dijkstra(path,StartIndex);
    console.log(PathArray);
    //alert("该点到其余各点的最短距离为：" + PathArray);
    //将最短路径在地图上展示出来
    DisplayPath(StartIndex,EndIndex);
    console.log(PathToEnd);
    //将最短路径的距离在页面上展示出来
    document.getElementById("showdis").style.bottom="5%";
    document.getElementById("showdis").innerHTML = "当前路径的距离为："+PathArray[EndIndex].toString()+"米" + "<br>时间："+ PathArray[EndIndex].toString()/60 + "mins";
});

var button2 = document.getElementById("warninginfo");
button2.addEventListener("click", function () {
    if (button2.click == false) {
        return;
    }
    document.getElementById("showdis").style.bottom="1%";
    document.getElementById("showdis").innerHTML = "👿如不能正常使用：<br/>🕸检查网络<br/>💻更换浏览器";

});
