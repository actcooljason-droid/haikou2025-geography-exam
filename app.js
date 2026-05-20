// 试卷数据
const examData = {
    info: {
        title: "海口市2025年初中学业水平考试地理模拟试题一",
        year: "2025",
        region: "海口",
        totalQuestions: 38,
        totalScore: 100,
        duration: 60
    },
    questions: [
        { id: 1, type: "choice", score: 2, stem: "地球是太阳系中一颗特殊的行星，关于地球的描述正确的是：", options: {"A": "地球是太阳系中体积最大的行星", "B": "地球是一颗气态巨行星", "C": "地球是目前已知的唯一存在生命的星球", "D": "地球的卫星数量最多"}, image: "page1_img1.png", answer: "C", explanation: "地球是太阳系中目前已知的唯一存在生命的星球，这是地球特殊性的重要体现。" },
        { id: 2, type: "choice", score: 2, stem: "下列关于经纬线的说法，正确的是：", options: {"A": "所有经线都相等，所有纬线也相等", "B": "经线指示东西方向，纬线指示南北方向", "C": "赤道是最长的纬线", "D": "0°经线是东西半球的分界线"}, image: "page1_img1.png", answer: "C", explanation: "赤道是地球仪上最长的纬线圈，长约4万千米。" },
        { id: 3, type: "choice", score: 2, stem: "图1为某地等高线地形图，图中A点的海拔高度约为：", options: {"A": "80m", "B": "100m", "C": "120m", "D": "150m"}, image: "page1_img1.png", answer: "B", explanation: "根据等高线地形图，A点位于100m等高线上，海拔约为100m。" },
        { id: 4, type: "choice", score: 2, stem: "图1中所示的地形部位是：", options: {"A": "山顶", "B": "山脊", "C": "山谷", "D": "鞍部"}, image: "page1_img1.png", answer: "C", explanation: "等高线向高处凸出为山谷，图中A点附近等高线向高处凸出。" },
        { id: 5, type: "choice", score: 2, stem: "2024年11月28日，我国在文昌航天发射场成功发射了长征五号运载火箭，说明该发射场濒临：", options: {"A": "渤海", "B": "黄海", "C": "东海", "D": "南海"}, image: "page1_img1.png", answer: "D", explanation: "文昌航天发射场位于海南省，濒临南海。" },
        { id: 6, type: "choice", score: 2, stem: "下列天气符号中，表示多云的是：", options: {"A": "晴", "B": "多云", "C": "阴", "D": "小雨"}, image: "page1_img1.png", answer: "B", explanation: "多云的天气符号是。" },
        { id: 7, type: "choice", score: 2, stem: "2023年12月，我国科考队员在第40次南极科考中测得某地的气温为-12°C，测量地点的海拔为3046米。若气温直减率为0.6°C/100米，则该地的海拔对应的气温应为（只考虑海拔因素）：", options: {"A": "-23°C", "B": "-1°C", "C": "6.3°C", "D": "-30.3°C"}, image: "page2_img1.png", answer: "A", explanation: "海拔每升高100米，气温下降0.6°C。3046米下降约18.3°C，所以-12-18.3=-30.3°C。" },
        { id: 8, type: "choice", score: 2, stem: "关于世界海陆分布的描述，正确的是：", options: {"A": "陆地主要集中在北半球", "B": "海洋主要集中在南半球", "C": "北极周围是陆地", "D": "南极周围是海洋"}, image: "page2_img1.png", answer: "A", explanation: "陆地主要集中在北半球，北极周围是海洋，南极周围是陆地。" },
        { id: 9, type: "choice", score: 2, stem: "2025年3月22日是第三十三届世界水日，2025年我国纪念活动的宣传主题为节水中国，你我同行。关于我国水资源的说法，正确的是：", options: {"A": "水资源总量丰富，人均占有量高", "B": "南多北少，夏秋多，冬春少", "C": "水资源分布均匀", "D": "东部多，西部少"}, image: "page2_img1.png", answer: "B", explanation: "我国水资源时空分布不均：南多北少，夏秋多，冬春少。" },
        { id: 10, type: "choice", score: 2, stem: "图2表示的是某种地理事物由多到少的变化趋势，该地理事物最可能是：", options: {"A": "人口密度", "B": "降水量", "C": "海拔高度", "D": "森林覆盖率"}, image: "page2_img1.png", answer: "A", explanation: "根据图中曲线变化趋势判断，可能表示人口密度由多到少的变化。" },
        { id: 11, type: "choice", score: 2, stem: "读海南省某区域地图，该区域的面积约为：", options: {"A": "1709.8平方千米", "B": "37.8平方千米", "C": "1.42平方千米", "D": "1.28平方千米"}, image: "page2_img1.png", answer: "A", explanation: "根据地图比例尺和图示范围估算，该区域面积约为1709.8平方千米。" },
        { id: 12, type: "choice", score: 2, stem: "该区域可能位于：", options: {"A": "海口市", "B": "三亚市", "C": "儋州市", "D": "琼海市"}, image: "page2_img1.png", answer: "A", explanation: "根据地图轮廓和位置特征判断，该区域最可能位于海口市。" },
        { id: 13, type: "choice", score: 2, stem: "关于我国地理位置的描述，正确的是：", options: {"A": "全部位于北温带", "B": "位于亚洲东部，太平洋西岸", "C": "全部位于东半球", "D": "领土最南端在北回归线附近"}, image: "page3_img1.png", answer: "B", explanation: "我国位于亚洲东部，太平洋西岸，大部分位于北温带，小部分位于热带。" },
        { id: 14, type: "choice", score: 2, stem: "我国冬季气温分布的特点是：", options: {"A": "南北温差不大", "B": "全国普遍高温", "C": "南北温差大", "D": "东西温差大"}, image: "page3_img1.png", answer: "C", explanation: "我国冬季受纬度位置和冬季风影响，南北温差大。" },
        { id: 15, type: "choice", score: 2, stem: "图3为某学校地理兴趣小组绘制的某区域平面图，其比例尺为1:50000。若图上距离为5厘米，则实地距离应为：", options: {"A": "2500厘米", "B": "50000厘米", "C": "2500米", "D": "5000米"}, image: "page3_img1.png", answer: "C", explanation: "比例尺1:50000表示图上1厘米代表实地500米，5厘米代表实地2500米。" },
        { id: 16, type: "choice", score: 2, stem: "图3中地理兴趣小组测得A地在B地的方向是：", options: {"A": "正东", "B": "正西", "C": "正南", "D": "正北"}, image: "page3_img1.png", answer: "A", explanation: "根据指向标判断，A地位于B地的正东方向。" },
        { id: 17, type: "choice", score: 2, stem: "图4为某日甲、乙两地正午旗杆及其影子示意图，甲地的纬度可能是：", options: {"A": "0°", "B": "23.5°S", "C": "23.5°N", "D": "66.5°N"}, image: "page4_img1.png", answer: "C", explanation: "根据影子方向和长度，甲地位于北回归线附近（23.5°N）。" },
        { id: 18, type: "choice", score: 2, stem: "图4中乙地的纬度可能是：", options: {"A": "赤道", "B": "北回归线", "C": "南回归线", "D": "北极圈"}, image: "page4_img1.png", answer: "A", explanation: "乙地影子长度为0，说明太阳直射，可能位于赤道。" },
        { id: 19, type: "choice", score: 2, stem: "图5为2010-2023年中国15-64岁人口比重变化图，15-64岁人口比重：", options: {"A": "持续上升", "B": "先升后降", "C": "持续下降", "D": "先降后升"}, image: "page4_img1.png", answer: "B", explanation: "根据图表显示，15-64岁人口比重先上升后下降。" },
        { id: 20, type: "choice", score: 2, stem: "图5反映出我国人口面临的问题是：", options: {"A": "人口增长过快", "B": "劳动力短缺", "C": "人口老龄化加剧", "D": "性别比例失衡"}, image: "page4_img1.png", answer: "C", explanation: "劳动年龄人口比重下降，老年人口比重上升，说明人口老龄化加剧。" },
        { id: 21, type: "choice", score: 2, stem: "为应对图5反映的问题，我国采取的措施是：", options: {"A": "鼓励生育", "B": "延迟退休", "C": "完善养老保障", "D": "以上都是"}, image: "page4_img1.png", answer: "D", explanation: "应对人口老龄化，需要鼓励生育、延迟退休、完善养老保障等多措并举。" },
        { id: 22, type: "choice", score: 2, stem: "2025年4月24日是第九个中国航天日。下列关于我国航天成就的说法，正确的是：", options: {"A": "东方红一号卫星于1970年发射", "B": "神舟五号实现了首次载人航天", "C": "嫦娥四号首次登陆月球背面", "D": "天问一号实现了首次火星探测"}, image: "page5_img1.png", answer: "B", explanation: "2003年神舟五号载人飞船成功发射，杨利伟成为首位进入太空的中国航天员。" },
        { id: 23, type: "choice", score: 2, stem: "图6为我国某区域年降水量分布图，图中降水量的分布规律是：", options: {"A": "从东南向西北递减", "B": "从西北向东南递减", "C": "从北向南递增", "D": "从南向北递增"}, image: "page5_img1.png", answer: "A", explanation: "受夏季风影响，我国降水量从东南向西北递减。" },
        { id: 24, type: "choice", score: 2, stem: "图7为某地气温年变化曲线图，该地最可能位于：", options: {"A": "热带", "B": "北温带", "C": "南温带", "D": "寒带"}, image: "page5_img1.png", answer: "B", explanation: "根据气温年变化曲线，最热月约7月，最冷月约1月，为北半球温带地区。" },
        { id: 25, type: "choice", score: 2, stem: "图8为某区域的等温线分布图，图中a、b、c、d四处的气温由高到低排序正确的是：", options: {"A": "a>b>c>d", "B": "b>a>c>d", "C": "c>d>a>b", "D": "d>c>b>a"}, image: "page5_img1.png", answer: "A", explanation: "根据等温线数值判断，气温由高到低为a>b>c>d。" },
        { id: 26, type: "choice", score: 2, stem: "2025年春节期间，某旅行团从北京出发，进行为期5天的自驾游。他们最可能选择的路线是：", options: {"A": "北京→上海→杭州→苏州", "B": "北京→西安→成都→重庆", "C": "北京→哈尔滨→长春→沈阳", "D": "北京→呼和浩特→乌鲁木齐→拉萨"}, image: "page5_img1.png", answer: "A", explanation: "春节期间北方寒冷，南方温暖，上海、杭州、苏州是热门旅游目的地。" },
        { id: 27, type: "choice", score: 2, stem: "该旅行团沿途不可能看到的景观是：", options: {"A": "亚热带常绿阔叶林", "B": "温带落叶阔叶林", "C": "热带季风气候", "D": "温带季风气候"}, image: "page5_img1.png", answer: "C", explanation: "热带季风气候主要分布在热带地区，北京出发自驾游沿途看不到。" },
        { id: 28, type: "choice", score: 2, stem: "图9为某区域简图，图中①②③④四地最可能发展旅游业的是：", options: {"A": "①", "B": "②", "C": "③", "D": "④"}, image: "page6_img1.png", answer: "B", explanation: "②地位于沿海地区，风景优美，交通便利，最适合发展旅游业。" },
        { id: 29, type: "choice", score: 2, stem: "图9中③④两地的农业类型主要是：", options: {"A": "种植业", "B": "畜牧业", "C": "林业", "D": "渔业"}, image: "page6_img1.png", answer: "B", explanation: "③④地位于内陆高原，以草原为主，主要发展畜牧业。" },
        { id: 30, type: "choice", score: 2, stem: "图10为某地气温曲线和降水量柱状图，该地的气候类型是：", options: {"A": "热带季风气候", "B": "亚热带季风气候", "C": "温带季风气候", "D": "地中海气候"}, image: "page6_img1.png", answer: "B", explanation: "根据气温曲线和降水量判断，夏季高温多雨，冬季温和少雨，为亚热带季风气候。" },
        { id: 31, type: "choice", score: 2, stem: "图10中阴影部分表示的日期范围可能是：", options: {"A": "1月1日-3月21日", "B": "3月21日-6月22日", "C": "6月22日-9月23日", "D": "9月23日-12月22日"}, image: "page6_img1.png", answer: "B", explanation: "根据阴影部分的季节特征判断，可能为春分到夏至之间。" },
        { id: 32, type: "choice", score: 2, stem: "关于图中a、b、c三条河流的描述，正确的是：", options: {"A": "a河结冰期最长", "B": "b河含沙量最大", "C": "c河汛期最长", "D": "三条河都注入太平洋"}, image: "page6_img1.png", answer: "C", explanation: "c河流经地区雨季最长，因此汛期最长。" },
        { id: 33, type: "choice", score: 2, stem: "关于图中三条河流的水文特征比较，正确的是：", options: {"A": "a河流量最大", "B": "b河结冰期最短", "C": "c河含沙量最大", "D": "三条河的水量季节变化都较大"}, image: "page6_img1.png", answer: "D", explanation: "受季风气候影响，三条河的水量季节变化都较大。" },
        { id: 34, type: "choice", score: 2, stem: "图11为某区域等高线地形图，图中a、b、c、d四处适合攀岩的是：", options: {"A": "a处", "B": "b处", "C": "c处", "D": "d处"}, image: "page6_img1.png", answer: "C", explanation: "c处为陡崖，适合攀岩运动。" },
        { id: 35, type: "choice", score: 2, stem: "图11中①②③④四条登山路线，最费力的是：", options: {"A": "①", "B": "②", "C": "③", "D": "④"}, image: "page6_img1.png", answer: "B", explanation: "②路线等高线最密集，坡度最陡，登山最费力。" },
        { id: 36, type: "comprehensive", score: 10, stem: "阅读图文材料，回答问题。\n\n材料：2025年春节期间，某中学地理兴趣小组进行了一次研学旅行活动。他们从海口出发，沿途经过三亚、广州，最后到达武汉。\n\n(1) 他们在旅途中可能看到的主要植被类型有哪些？（2分）\n(2) 途经广州时，当地的气候特点是什么？（2分）\n(3) 到达武汉后，他们发现武汉的气温比海口低很多，主要原因是什么？（2分）\n(4) 这次研学旅行，沿途经过的主要交通方式有哪些？（2分）\n(5) 请为这次研学旅行设计一条最短的旅游路线。（2分）", image: "page6_img1.png", answer: "(1) 热带季雨林、亚热带常绿阔叶林、温带落叶阔叶林\n(2) 温和湿润，降水丰富\n(3) 纬度差异导致气温差异\n(4) 航空、铁路、公路\n(5) 海口→三亚(汽车)→广州(高铁)→武汉(高铁)", explanation: "本题考察中国地理的植被、气候、交通等知识，需要结合图文材料综合分析。" },
        { id: 37, type: "comprehensive", score: 10, stem: "阅读图文材料，回答问题。\n\n材料：2025年4月23日，海南自由贸易港2025年推介会在北京举行。海南自由贸易港的建设吸引了大量国内外企业的关注。\n\n(1) 海南发展自由贸易港的优势条件有哪些？（2分）\n(2) 海南自由贸易港的建立对当地经济发展有什么影响？（2分）\n(3) 请为海南自由贸易港的可持续发展提出建议。（2分）\n(4) 海南自由贸易港的建立，体现了我国哪些发展理念？（2分）\n(5) 作为中学生，你可以为海南自由贸易港建设做些什么？（2分）", image: "page6_img1.png", answer: "(1) 地理位置优越、政策支持、环境优美、资源丰富\n(2) 促进就业、带动相关产业发展、扩大对外开放\n(3) 保护生态环境、发展绿色产业、加强区域合作\n(4) 创新、协调、绿色、开放、共享\n(5) 努力学习相关知识、培养国际视野、提升综合素质", explanation: "本题结合时事热点考察海南自由贸易港建设，需要学生关注国家重大发展战略。" },
        { id: 38, type: "comprehensive", score: 10, stem: "阅读图文材料，回答问题。\n\n材料：2025年4月24日是第九个中国航天日。我国航天事业取得了举世瞩目的成就。\n\n(1) 写出图15中酒泉、太原、西昌、文昌四个卫星发射中心的经纬度位置。（4分）\n(2) 分析文昌卫星发射中心的优势条件。（2分）\n(3) 我国为什么要建设多个卫星发射中心？（2分）\n(4) 航天事业的发展对我国有什么重要意义？（2分）", image: "page6_img1.png", answer: "(1) 酒泉：约40N，100E；太原：约38N，112E；西昌：约28N，102E；文昌：约19N，110E\n(2) 纬度低，节省燃料；海运便利，运输大型设备；人口稀少，安全性高\n(3) 适应不同轨道卫星发射需求；分散风险，提高发射成功率\n(4) 提升国际地位；带动相关产业发展；服务经济社会发展", explanation: "本题结合航天热点考察中国地理的空间定位和区域分析能力。" }
    ]
};

// 全局变量
let currentQuestion = 0;
let userAnswers = {};
let subjectiveGradings = {};
let startTime = null;

// 开始答题
function startExam() {
    console.log("开始答题！");
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('header').style.display = 'block';
    document.getElementById('questionArea').style.display = 'block';
    startTime = new Date();
    currentQuestion = 0;
    userAnswers = {};
    subjectiveGradings = {};
    renderAllQuestions();
    updateProgress();
    window.scrollTo(0, 0);
}

// 渲染所有题目
function renderAllQuestions() {
    const area = document.getElementById('questionArea');
    area.innerHTML = '';
    
    examData.questions.forEach(function(q, idx) {
        const card = document.createElement('div');
        card.className = 'card question-card' + (idx === 0 ? ' active' : '');
        card.id = 'q' + q.id;
        
        const typeLabel = q.type === 'choice' ? '选择题' : '综合题';
        const typeClass = q.type === 'comprehensive' ? 'comprehensive' : '';
        
        let html = '<div class="question-header"><div>' +
            '<span class="question-num">第' + q.id + '题</span>' +
            '<span class="question-type ' + typeClass + '">' + typeLabel + '</span>' +
            '</div><div class="question-score">' + q.score + '分</div></div>' +
            '<div class="question-stem">' + q.stem.replace(/\n/g, '<br>') + '</div>';
        
        if (q.image) {
            html += '<div class="image-container">' +
                '<img src="images/' + q.image + '" alt="题目配图" onerror="this.style.display=\'none\'">' +
                '<div class="image-caption">图' + Math.ceil(q.id / 7) + ' (题目配图)</div></div>';
        }
        
        if (q.type === 'choice') {
            html += '<div class="options">';
            for (var key in q.options) {
                html += '<div class="option" onclick="selectOption(' + q.id + ', \'' + key + '\')" data-question="' + q.id + '" data-option="' + key + '">' +
                    '<span class="option-label">' + key + '</span>' +
                    '<span class="option-text">' + q.options[key] + '</span></div>';
            }
            html += '</div>';
        } else {
            html += '<textarea class="subjective-input" id="subj-' + q.id + '" placeholder="请输入你的答案..." oninput="saveSubjective(' + q.id + ', this.value)"></textarea>' +
                '<div class="grading-section" id="grading-' + q.id + '">' +
                '<div class="grading-question">请判断你的答案是否正确：</div>' +
                '<div class="grading-options">' +
                '<button class="grading-btn" onclick="gradeSubjective(' + q.id + ', true)">正确</button>' +
                '<button class="grading-btn" onclick="gradeSubjective(' + q.id + ', false)">错误</button>' +
                '</div></div>';
        }
        
        html += '<div class="answer-section">' +
            '<button class="answer-toggle" onclick="toggleAnswer(' + q.id + ')">查看答案</button>' +
            '<div class="answer-content" id="ans-' + q.id + '">' +
            '<div class="answer-label">参考答案</div>' +
            '<div>' + q.answer.replace(/\n/g, '<br>') + '</div>' +
            '<div class="explanation"><div class="explanation-label">解析</div>' +
            '<div>' + q.explanation + '</div></div></div></div>';
        
        html += '<div class="btn-group">';
        if (idx > 0) {
            html += '<button class="btn btn-prev" onclick="goToQuestion(' + (idx - 1) + ')">上一题</button>';
        } else {
            html += '<div></div>';
        }
        
        if (idx < examData.questions.length - 1) {
            html += '<button class="btn btn-next" onclick="goToQuestion(' + (idx + 1) + ')">下一题</button>';
        } else {
            html += '<button class="btn btn-submit" onclick="submitExam()">提交试卷</button>';
        }
        html += '</div>';
        
        card.innerHTML = html;
        area.appendChild(card);
    });
}

// 选择题作答
function selectOption(questionId, option) {
    userAnswers[questionId] = option;
    var card = document.getElementById('q' + questionId);
    var options = card.querySelectorAll('.option');
    options.forEach(function(opt) {
        opt.classList.remove('selected');
        if (opt.dataset.option === option) {
            opt.classList.add('selected');
        }
    });
    updateProgress();
}

// 保存主观题答案
function saveSubjective(questionId, value) {
    userAnswers[questionId] = value;
    updateProgress();
}

// 主观题自评
function gradeSubjective(questionId, isCorrect) {
    subjectiveGradings[questionId] = isCorrect;
    var section = document.getElementById('grading-' + questionId);
    var buttons = section.querySelectorAll('.grading-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected-correct', 'selected-wrong');
    });
    if (isCorrect) {
        buttons[0].classList.add('selected-correct');
    } else {
        buttons[1].classList.add('selected-wrong');
    }
    updateProgress();
}

// 切换答案显示
function toggleAnswer(questionId) {
    var ans = document.getElementById('ans-' + questionId);
    var btn = ans.previousElementSibling;
    if (ans.classList.contains('show')) {
        ans.classList.remove('show');
        btn.innerHTML = '查看答案';
    } else {
        ans.classList.add('show');
        btn.innerHTML = '隐藏答案';
    }
}

// 跳转到指定题目
function goToQuestion(idx) {
    var cards = document.querySelectorAll('.question-card');
    cards.forEach(function(c) { c.classList.remove('active'); });
    cards[idx].classList.add('active');
    currentQuestion = idx;
    window.scrollTo(0, 0);
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        goToQuestion(currentQuestion - 1);
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestion < examData.questions.length - 1) {
        goToQuestion(currentQuestion + 1);
    }
}

// 更新进度
function updateProgress() {
    var answered = 0;
    examData.questions.forEach(function(q) {
        if (q.type === 'choice') {
            if (userAnswers[q.id]) answered++;
        } else {
            if (subjectiveGradings[q.id] !== undefined) answered++;
        }
    });
    var pct = Math.round((answered / examData.questions.length) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = '已作答 ' + answered + '/' + examData.questions.length + ' 题';
}

// 提交试卷
function submitExam() {
    var score = 0;
    var correct = 0;
    var wrong = 0;
    var wrongQuestions = [];
    
    examData.questions.forEach(function(q) {
        if (q.type === 'choice') {
            var userAns = userAnswers[q.id];
            if (userAns === q.answer) {
                score += q.score;
                correct++;
            } else {
                wrong++;
                wrongQuestions.push({
                    id: q.id,
                    stem: q.stem.substring(0, 60) + '...',
                    yourAnswer: userAns || '未作答',
                    correctAnswer: q.answer,
                    explanation: q.explanation
                });
            }
        } else {
            var graded = subjectiveGradings[q.id];
            if (graded === true) {
                score += q.score;
                correct++;
            } else if (graded === false) {
                wrong++;
                wrongQuestions.push({
                    id: q.id,
                    stem: q.stem.substring(0, 60) + '...',
                    yourAnswer: userAnswers[q.id] || '未作答',
                    correctAnswer: '见解析',
                    explanation: q.explanation
                });
            }
        }
    });
    
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('resultPage').classList.add('active');
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    
    var wrongList = document.getElementById('wrongList');
    if (wrongQuestions.length === 0) {
        wrongList.innerHTML = '<p style="text-align:center; color: var(--success); font-size: 1.1rem;">太棒了！全部答对！</p>';
    } else {
        wrongList.innerHTML = wrongQuestions.map(function(wq) {
            return '<div class="wrong-item">' +
                '<div class="wrong-q-num">第' + wq.id + '题</div>' +
                '<div style="margin-bottom:8px; color: var(--text-secondary); font-size: 0.9rem;">' + wq.stem + '</div>' +
                '<div class="wrong-detail">' +
                '<div class="your-answer">你的答案: ' + wq.yourAnswer + '</div>' +
                '<div class="correct-answer">正确答案: ' + wq.correctAnswer + '</div></div>' +
                '<div style="margin-top:10px; font-size: 0.85rem; color: var(--text-secondary);">' + wq.explanation + '</div></div>';
        }).join('');
    }
    
    var suggestions = document.getElementById('suggestionList');
    var accuracy = Math.round((correct / examData.questions.length) * 100);
    var suggestionItems = [];
    
    if (accuracy >= 90) {
        suggestionItems = [
            { icon: '', title: '成绩优异', desc: '你的地理基础非常扎实，继续保持！' },
            { icon: '', title: '精益求精', desc: '可以尝试更高难度的题目，挑战自己。' }
        ];
    } else if (accuracy >= 70) {
        suggestionItems = [
            { icon: '', title: '加强基础', desc: '建议复习教材基础知识，巩固核心概念。' },
            { icon: '', title: '多看地图', desc: '地理学习离不开地图，建议多练习读图能力。' },
            { icon: '', title: '错题整理', desc: '将错题记录下来，定期复习，避免重复犯错。' }
        ];
    } else {
        suggestionItems = [
            { icon: '', title: '系统复习', desc: '建议系统复习课本内容，建立完整的知识体系。' },
            { icon: '', title: '地图训练', desc: '加强地图阅读训练，提高空间定位能力。' },
            { icon: '', title: '反复练习', desc: '多做练习题，特别是错题，理解透彻。' },
            { icon: '', title: '查漏补缺', desc: '针对薄弱环节重点突破，不懂就问。' }
        ];
    }
    
    suggestions.innerHTML = suggestionItems.map(function(s) {
        return '<div class="suggestion-item">' +
            '<span class="suggestion-icon">' + s.icon + '</span>' +
            '<div class="suggestion-text">' +
            '<div class="suggestion-title">' + s.title + '</div>' +
            '<div class="suggestion-desc">' + s.desc + '</div></div></div>';
    }).join('');
    
    window.scrollTo(0, 0);
}

// 回顾答案
function reviewAnswers() {
    document.getElementById('resultPage').classList.remove('active');
    document.getElementById('header').style.display = 'block';
    document.getElementById('questionArea').style.display = 'block';
    goToQuestion(0);
}

// 重新开始
function restartExam() {
    userAnswers = {};
    subjectiveGradings = {};
    currentQuestion = 0;
    document.getElementById('resultPage').classList.remove('active');
    document.getElementById('startPage').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('questionArea').innerHTML = '';
    window.scrollTo(0, 0);
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    }
});

// 脚本在body末尾执行，DOM已就绪，直接绑定
var btn = document.getElementById('startBtn');
if (btn) {
    btn.addEventListener('click', startExam);
}
console.log('地理试卷应用已加载完成！');
