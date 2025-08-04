// 初中地理题库测试版 (仅包含2道题)
// 完整的renderQuestion和loadQuestion函数实现
window.loadQuestion = function(index) {
    const question = window.questions[index];
    if (question) {
        window.renderQuestion(question);
    } else {
        console.error('找不到题目索引:', index);
    }
};

window.renderQuestion = function(question) {
    console.log('渲染题目:', question);
    
    // 清空之前的内容
    window.questionContent.innerHTML = '';
    window.explanationContainer.classList.add('hidden');
    window.explanationContent.innerHTML = '';
    window.selectedOptions = []; // 使用数组存储多个选中的选项
    window.isSubmitted = false;
    window.submitBtn.disabled = false;
    window.nextBtn.disabled = true;

    // 判断是否为多选题 (答案包含多个选项)
    const isMultipleChoice = question.answer.length > 1;

    // 显示题目内容
    const questionHTML = `
        <h3 class="text-xl font-semibold mb-4">第${question.id}题: ${question.question} ${isMultipleChoice ? '<span class="text-red-500 text-sm font-normal">(多选题)</span>' : ''}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            ${question.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                return `
                <div class="option-item border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors" data-option="${optionLetter}">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 font-medium">${optionLetter}</div>
                        <p>${option}</p>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `;

    window.questionContent.innerHTML = questionHTML;

    // 添加选项点击事件
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.isSubmitted) return;

            const option = this.getAttribute('data-option');

            if (isMultipleChoice) {
                // 多选题：可以选择多个选项
                if (window.selectedOptions.includes(option)) {
                    // 取消选择
                    this.classList.remove('bg-blue-100', 'border-blue-500');
                    window.selectedOptions = window.selectedOptions.filter(opt => opt !== option);
                } else {
                    // 添加选择
                    this.classList.add('bg-blue-100', 'border-blue-500');
                    window.selectedOptions.push(option);
                }
            } else {
                // 单选题：只能选择一个选项
                // 移除其他选项的选中状态
                document.querySelectorAll('.option-item').forEach(opt => {
                    opt.classList.remove('bg-blue-100', 'border-blue-500');
                });

                // 添加当前选项的选中状态
                this.classList.add('bg-blue-100', 'border-blue-500');
                window.selectedOptions = [option];
            }
        });
    });
};

window.questions = [
    {
        id: 1,
        question: "地球自转的方向是？",
        options: ["自东向西", "自西向东", "自南向北", "自北向南"],
        answer: "B",
        explanation: "地球自转是地球绕着地轴自西向东旋转。",
        category: "地球与地图",
        subcategory: "地球运动",
        difficulty: "基础",
        knowledgePoint: "地球自转的方向"
    },
    {
        id: 2,
        question: "下列哪个城市是中华人民共和国的首都？",
        options: ["上海", "北京", "广州", "深圳"],
        answer: "B",
        explanation: "北京是中国的首都。",
        category: "中国地理",
        subcategory: "首都与城市",
        difficulty: "基础",
        knowledgePoint: "中国的首都"
    },
        {
        id: 3,
        question: "世界上面积最大的海洋是？",
        options: ["大西洋", "印度洋", "太平洋", "北冰洋"],
        answer: "C",
        explanation: "太平洋是世界上最大、最深、边缘海和岛屿最多的大洋。",
        category: "世界地理",
        subcategory: "海洋资源",
        difficulty: "基础",
        knowledgePoint: "世界最大的海洋"
    },
    {
        id: 4,
        question: "世界上最高的山峰是？",
        options: ["乔戈里峰", "珠穆朗玛峰", "干城章嘉峰", "洛子峰"],
        answer: "B",
        explanation: "珠穆朗玛峰是世界海拔最高的山峰，位于中国与尼泊尔边境线上，海拔约8848.86米。",
        category: "世界地理",
        subcategory: "地形地貌",
        difficulty: "基础",
        knowledgePoint: "世界最高峰"
    },
    {
        id: 5,
        question: "下列哪个是中国最大的淡水湖？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "鄱阳湖是中国第一大淡水湖，位于江西省北部，面积约3960平方公里。",
        category: "中国地理",
        subcategory: "河流湖泊",
        difficulty: "基础",
        knowledgePoint: "中国最大的淡水湖"
    },
    {
        id: 6,
        question: "被称为'世界屋脊'的是？",
        options: ["青藏高原", "云贵高原", "黄土高原", "内蒙古高原"],
        answer: "A",
        explanation: '青藏高原是世界海拔最高的高原，平均海拔4000米以上，被称为"世界屋脊"。',
        category: "中国地理",
        subcategory: "地形地貌",
        difficulty: "基础",
        knowledgePoint: "青藏高原的别称"
    },
    {
        id: 7,
        question: "地球公转一周的时间大约是？",
        options: ["一天", "一个月", "一年", "一小时"],
        answer: "C",
        explanation: "地球绕太阳公转一周的时间大约是365天，即一年。",
        category: "地球与地图",
        subcategory: "地球运动",
        difficulty: "基础",
        knowledgePoint: "地球公转周期"
    },
    {
        id: 8,
        question: "世界上面积最大的国家是？",
        options: ["中国", "美国", "俄罗斯", "加拿大"],
        answer: "C",
        explanation: "俄罗斯是世界上面积最大的国家，国土面积约1709.82万平方公里。",
        category: "世界地理",
        subcategory: "国家与地区",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 9,
        question: "中国的地形特点是？",
        options: ["以平原为主", "以高原为主", "地形复杂多样，山区面积广大", "以盆地为主"],
        answer: "C",
        explanation: "中国地形复杂多样，包括山地、高原、平原、盆地和丘陵等多种地形类型，其中山区面积广大。",
        category: "中国地理",
        subcategory: "地形地貌",
        difficulty: "中等",
        knowledgePoint: "中国的地形特点"
    },
    {
        id: 10,
        question: "下列哪个节气标志着北半球夏季的开始？",
        options: ["立春", "立夏", "立秋", "立冬"],
        answer: "B",
        explanation: "立夏是二十四节气中的第七个节气，表示夏季的开始。",
        category: "地球与地图",
        subcategory: "气候与季节",
        difficulty: "中等",
        knowledgePoint: "二十四节气"
    },
    {
        id: 11,
        question: "下列现象中，主要由地球公转产生的是？",
        options: ["昼夜交替", "四季变化", "时差", "太阳东升西落"],
        answer: "B",
        explanation: "地球公转产生了四季变化、昼夜长短变化等地理现象。昼夜交替、时差和太阳东升西落主要由地球自转产生。",
        category: "地球与地图",
        subcategory: "地球运动",
        difficulty: "基础",
        knowledgePoint: "地球公转的地理意义"
    },
    {
        id: 12,
        question: "中国东部地区的主要气候类型是？",
        options: ["温带大陆性气候", "温带季风气候", "亚热带季风气候", "热带季风气候"],
        answer: "C",
        explanation: "中国东部地区以季风气候为主，秦岭-淮河一线以南主要是亚热带季风气候，以北主要是温带季风气候。",
        category: "中国地理",
        subcategory: "气候特征",
        difficulty: "基础",
        knowledgePoint: "中国的气候类型分布"
    },
    {
        id: 13,
        question: "世界上面积最大的平原是？",
        options: ["亚马逊平原", "东欧平原", "西西伯利亚平原", "长江中下游平原"],
        answer: "A",
        explanation: "亚马逊平原位于南美洲北部，面积约560万平方公里，是世界上面积最大的平原。",
        category: "世界地理",
        subcategory: "地形地貌",
        difficulty: "基础",
        knowledgePoint: "世界主要地形区"
    },
    {
        id: 14,
        question: "下列哪个海峡是连接太平洋和印度洋的重要通道？",
        options: ["马六甲海峡", "直布罗陀海峡", "英吉利海峡", "霍尔木兹海峡"],
        answer: "A",
        explanation: "马六甲海峡位于马来半岛和苏门答腊岛之间，是连接太平洋和印度洋的重要通道，也是世界上最繁忙的海峡之一。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "世界重要海峡"
    },
    {
        id: 15,
        question: "中国的人口地理分界线是？",
        options: ["秦岭-淮河一线", "黑河-腾冲一线", "大兴安岭-太行山-巫山-雪峰山一线", "昆仑山-祁连山-横断山脉一线"],
        answer: "B",
        explanation: "黑河-腾冲一线是中国的人口地理分界线，该线以东人口稠密，以西人口稀疏。",
        category: "中国地理",
        subcategory: "人口与城市",
        difficulty: "中等",
        knowledgePoint: "中国人口分布特征"
    },
    {
        id: 16,
        question: "下列哪种资源属于可再生资源？",
        options: ["煤炭", "石油", "天然气", "太阳能"],
        answer: "D",
        explanation: "可再生资源是指可以在较短时间内更新、再生，或者可以循环使用的自然资源，如太阳能、风能、水能等。煤炭、石油、天然气属于不可再生资源。",
        category: "资源与环境",
        subcategory: "自然资源分类",
        difficulty: "基础",
        knowledgePoint: "可再生资源与不可再生资源"
    },
    {
        id: 17,
        question: "板块构造学说认为，喜马拉雅山脉是由哪两个板块碰撞挤压形成的？",
        options: ["欧亚板块和非洲板块", "欧亚板块和印度洋板块", "美洲板块和太平洋板块", "印度洋板块和非洲板块"],
        answer: "B",
        explanation: "喜马拉雅山脉是由欧亚板块和印度洋板块碰撞挤压形成的，并且现在仍在不断升高。",
        category: "地球与地图",
        subcategory: "板块构造",
        difficulty: "中等",
        knowledgePoint: "板块构造学说"
    },
    {
        id: 18,
        question: "中国最长的河流是？",
        options: ["黄河", "长江", "珠江", "黑龙江"],
        answer: "B",
        explanation: "长江是中国最长的河流，全长约6300公里，也是世界第三长河。",
        category: "中国地理",
        subcategory: "河流湖泊",
        difficulty: "基础",
        knowledgePoint: "中国主要河流"
    },
    {
        id: 19,
        question: "下列哪个国家是世界上最大的发展中国家？",
        options: ["中国", "印度", "巴西", "俄罗斯"],
        answer: "A",
        explanation: "中国是世界上最大的发展中国家，也是世界第二大经济体。",
        category: "世界地理",
        subcategory: "国家与地区",
        difficulty: "基础",
        knowledgePoint: "世界主要国家"
    },
    {
        id: 20,
        question: "下列哪种天气现象主要与人类活动有关？",
        options: ["暴雨", "台风", "沙尘暴", "全球变暖"],
        answer: "D",
        explanation: "全球变暖主要是由于人类活动排放大量温室气体（如二氧化碳）导致的。暴雨、台风、沙尘暴等天气现象虽然可能受人类活动影响，但主要还是自然因素引起的。",
        category: "资源与环境",
        subcategory: "环境问题",
        difficulty: "中等",
        knowledgePoint: "人类活动对气候的影响"
    },
    {
        id: 21,
        question: "秦岭-淮河一线是中国地理上的重要分界线，下列哪项不属于其地理意义？",
        options: ["南方地区与北方地区的分界线", "亚热带与暖温带的分界线", "季风区与非季风区的分界线", "湿润区与半湿润区的分界线"],
        answer: "C",
        explanation: "秦岭-淮河一线是中国重要的地理分界线，它是南方地区与北方地区、亚热带与暖温带、湿润区与半湿润区的分界线。季风区与非季风区的分界线是大兴安岭-阴山-贺兰山-巴颜喀拉山-冈底斯山一线。",
        category: "中国地理",
        subcategory: "地理分界线",
        difficulty: "中等",
        knowledgePoint: "秦岭-淮河一线的地理意义"
    },
    {
        id: 22,
        question: "世界上人口最多的国家是？",
        options: ["中国", "印度", "美国", "印度尼西亚"],
        answer: "A",
        explanation: "中国是世界上人口最多的国家，根据最新数据，中国人口约为14亿。",
        category: "世界地理",
        subcategory: "人口与国家",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的国家"
    },
    {
        id: 23,
        question: "下列哪种地图比例尺最大？",
        options: ["1:100000", "1:50000", "1:10000", "1:5000"],
        answer: "D",
        explanation: "比例尺是表示图上距离比实地距离缩小的程度。比例尺的分母越小，比例尺越大，表示的实地范围越小，内容越详细。在选项中，1:5000的分母最小，比例尺最大。",
        category: "地球与地图",
        subcategory: "地图知识",
        difficulty: "中等",
        knowledgePoint: "比例尺的大小比较"
    },
    {
        id: 24,
        question: "中国最大的岛屿是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山群岛"],
        answer: "A",
        explanation: "台湾岛是中国最大的岛屿，面积约3.6万平方公里。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国最大的岛屿"
    },
    {
        id: 25,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "塔克拉玛干沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠位于非洲北部，面积约910万平方公里，是世界上面积最大的沙漠。",
        category: "世界地理",
        subcategory: "气候与沙漠",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 26,
        question: "下列哪个国家被称为'坐在矿车上的国家'？",
        options: ["中国", "美国", "澳大利亚", "巴西"],
        answer: "C",
        explanation: "澳大利亚矿产资源丰富，品种多，很多矿产的储量居世界前列，品质优、埋藏浅，易开采，被称为'坐在矿车上的国家'。",
        category: "世界地理",
        subcategory: "国家与资源",
        difficulty: "中等",
        knowledgePoint: "澳大利亚的别称"
    },
    {
        id: 27,
        question: "中国的地势特点是？",
        options: ["东高西低，呈阶梯状分布", "西高东低，呈阶梯状分布", "南高北低，呈阶梯状分布", "北高南低，呈阶梯状分布"],
        answer: "B",
        explanation: "中国的地势特点是西高东低，呈三级阶梯状分布。第一级阶梯是青藏高原，第二级阶梯是内蒙古高原、黄土高原、云贵高原等，第三级阶梯是东北平原、华北平原、长江中下游平原等。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的地势特点"
    },
    {
        id: 28,
        question: "下列哪个海洋是中国的内海？",
        options: ["渤海", "黄海", "东海", "南海"],
        answer: "A",
        explanation: "渤海是中国的内海，位于中国东部，被辽东半岛和山东半岛环抱。",
        category: "中国地理",
        subcategory: "海洋与海岸线",
        difficulty: "基础",
        knowledgePoint: "中国的内海"
    },
    {
        id: 29,
        question: "世界上最长的河流是？",
        options: ["尼罗河", "亚马逊河", "长江", "密西西比河"],
        answer: "A",
        explanation: "尼罗河是世界上最长的河流，流经非洲东部与北部，全长约6670公里。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最长的河流"
    },
    {
        id: 30,
        question: "下列哪种现象不是由板块运动引起的？",
        options: ["地震", "火山喷发", "海陆变迁", "昼夜交替"],
        answer: "D",
        explanation: "地震、火山喷发和海陆变迁都是由板块运动引起的。昼夜交替是由地球自转引起的。",
        category: "地球与地图",
        subcategory: "板块构造",
        difficulty: "中等",
        knowledgePoint: "板块运动的影响"
    },
    {
        id: 31,
        question: "下列哪个省份是中国人口最多的省份？",
        options: ["广东省", "河南省", "山东省", "四川省"],
        answer: "A",
        explanation: "广东省是中国人口最多的省份，根据最新数据，广东省常住人口超过1.2亿。",
        category: "中国地理",
        subcategory: "人口与省份",
        difficulty: "基础",
        knowledgePoint: "中国人口最多的省份"
    },
    {
        id: 32,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，国土面积约1709.82万平方公里。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 33,
        question: "下列哪个选项不是中国的四大高原之一？",
        options: ["青藏高原", "内蒙古高原", "云贵高原", "黄土高原", "帕米尔高原"],
        answer: "E",
        explanation: "中国的四大高原是青藏高原、内蒙古高原、云贵高原和黄土高原。帕米尔高原位于中国、塔吉克斯坦和阿富汗的交界处，不属于中国的四大高原之一。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的四大高原"
    },
    {
        id: 34,
        question: "下列哪个海洋是世界上面积最大的海洋？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "A",
        explanation: "太平洋是世界上面积最大的海洋，面积约1.8134亿平方公里，占地球表面积的近三分之一。",
        category: "世界地理",
        subcategory: "海洋与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的海洋"
    },
    {
        id: 35,
        question: "中国的首都是？",
        options: ["北京", "上海", "广州", "深圳"],
        answer: "A",
        explanation: "北京是中国的首都，是中国的政治、文化和国际交往中心。",
        category: "中国地理",
        subcategory: "首都与城市",
        difficulty: "基础",
        knowledgePoint: "中国的首都"
    },
    {
        id: 36,
        question: "下列哪个选项不是中国的四大发明之一？",
        options: ["造纸术", "印刷术", "火药", "指南针", "地动仪"],
        answer: "E",
        explanation: "中国的四大发明是造纸术、印刷术、火药和指南针。地动仪是东汉时期张衡发明的测量地震的仪器，不属于四大发明之一。",
        category: "中国地理",
        subcategory: "历史与文化",
        difficulty: "中等",
        knowledgePoint: "中国的四大发明"
    },
    {
        id: 37,
        question: "世界上最高的山峰是？",
        options: ["珠穆朗玛峰", "乔戈里峰", "干城章嘉峰", "洛子峰"],
        answer: "A",
        explanation: "珠穆朗玛峰是世界上最高的山峰，海拔约8848.86米，位于中国和尼泊尔的边境线上。",
        category: "世界地理",
        subcategory: "山峰与海拔",
        difficulty: "基础",
        knowledgePoint: "世界最高的山峰"
    },
    {
        id: 38,
        question: "下列哪个选项不是中国的直辖市？",
        options: ["北京市", "上海市", "天津市", "重庆市", "深圳市"],
        answer: "E",
        explanation: "中国的直辖市有北京市、上海市、天津市和重庆市。深圳市是广东省的一个地级市，不属于直辖市。",
        category: "中国地理",
        subcategory: "行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的直辖市"
    },
    {
        id: 39,
        question: "世界上最大的热带雨林是？",
        options: ["亚马逊雨林", "刚果雨林", "马来雨林", "澳大利亚雨林"],
        answer: "A",
        explanation: "亚马逊雨林是世界上最大的热带雨林，位于南美洲的亚马逊河流域，覆盖面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界最大的热带雨林"
    },
    {
        id: 40,
        question: "下列哪个选项不是中国的民族自治区？",
        options: ["内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "青海藏族自治区"],
        answer: "F",
        explanation: "中国的民族自治区有内蒙古自治区、广西壮族自治区、西藏自治区、宁夏回族自治区和新疆维吾尔自治区。青海省是中国的一个省份，不是民族自治区。",
        category: "中国地理",
        subcategory: "行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的民族自治区"
    },
    {
        id: 41,
        question: "中国的地形特点是？",
        options: ["以平原为主", "以高原为主", "地形复杂多样，山区面积广大", "以盆地为主"],
        answer: "C",
        explanation: "中国的地形特点是地形复杂多样，山区面积广大。五种基本地形类型在我国都有分布，其中山地、丘陵和比较崎岖的高原统称为山区，约占全国陆地面积的2/3。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的地形特点"
    },
    {
        id: 42,
        question: "世界上人口最多的大洲是？",
        options: ["亚洲", "非洲", "欧洲", "北美洲"],
        answer: "A",
        explanation: "亚洲是世界上人口最多的大洲，根据最新数据，亚洲人口约为45亿，占世界总人口的60%以上。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的大洲"
    },
    {
        id: 43,
        question: "下列哪个选项不是中国的主要气候类型？",
        options: ["温带季风气候", "亚热带季风气候", "热带季风气候", "温带海洋性气候", "温带大陆性气候"],
        answer: "D",
        explanation: "中国的主要气候类型有温带季风气候、亚热带季风气候、热带季风气候、温带大陆性气候和高原山地气候。温带海洋性气候主要分布在中纬度大陆西岸，中国没有这种气候类型。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国的气候类型"
    },
    {
        id: 44,
        question: "世界上最长的运河是？",
        options: ["京杭大运河", "苏伊士运河", "巴拿马运河", "基尔运河"],
        answer: "A",
        explanation: "京杭大运河是世界上最长的运河，北起北京，南至杭州，全长约1794公里，是中国古代劳动人民创造的一项伟大工程。",
        category: "中国地理",
        subcategory: "河流与运河",
        difficulty: "基础",
        knowledgePoint: "世界最长的运河"
    },
    {
        id: 45,
        question: "下列哪个选项不是中国的主要河流？",
        options: ["长江", "黄河", "珠江", "黑龙江", "伏尔加河"],
        answer: "E",
        explanation: "长江、黄河、珠江和黑龙江都是中国的主要河流。伏尔加河是俄罗斯的主要河流，也是欧洲最长的河流。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国的主要河流"
    },
    {
        id: 46,
        question: "世界上面积最小的国家是？",
        options: ["梵蒂冈", "摩纳哥", "瑙鲁", "图瓦卢"],
        answer: "A",
        explanation: "梵蒂冈是世界上面积最小的国家，面积仅为0.44平方公里，位于意大利首都罗马城的西北角。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最小的国家"
    },
    {
        id: 47,
        question: "下列哪个国家不是中国的陆上邻国？",
        options: ["俄罗斯", "印度", "朝鲜", "日本", "越南"],
        answer: "D",
        explanation: "中国的陆上邻国有14个，分别是俄罗斯、印度、朝鲜、越南、老挝、缅甸、蒙古、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、阿富汗、巴基斯坦、尼泊尔和不丹。日本是中国的海上邻国，不是陆上邻国。",
        category: "中国地理",
        subcategory: "邻国与边界",
        difficulty: "中等",
        knowledgePoint: "中国的陆上邻国"
    },
    {
        id: 48,
        question: "世界上最大的岛屿是？",
        options: ["格陵兰岛", "新几内亚岛", "加里曼丹岛", "马达加斯加岛"],
        answer: "A",
        explanation: "格陵兰岛是世界上最大的岛屿，面积约216.6万平方公里，位于北美洲东北部，属于丹麦。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的岛屿"
    },
    {
        id: 49,
        question: "下列哪个选项不是中国的四大盆地之一？",
        options: ["塔里木盆地", "准噶尔盆地", "柴达木盆地", "四川盆地", "吐鲁番盆地"],
        answer: "E",
        explanation: "中国的四大盆地是塔里木盆地、准噶尔盆地、柴达木盆地和四川盆地。吐鲁番盆地是中国地势最低的盆地，但不属于四大盆地之一。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的四大盆地"
    },
    {
        id: 50,
        question: "世界上最大的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 51,
        question: "下列哪个选项是中国的第一大淡水湖？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "鄱阳湖是中国第一大淡水湖，位于江西省北部，面积约3960平方公里。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大淡水湖"
    },
    {
        id: 52,
        question: "世界上最深的湖泊是？",
        options: ["贝加尔湖", "坦噶尼喀湖", "里海", "死海"],
        answer: "A",
        explanation: "贝加尔湖是世界上最深的湖泊，最深处达1637米，位于俄罗斯东西伯利亚南部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最深的湖泊"
    },
    {
        id: 53,
        question: "中国领土的最南端是？",
        options: ["曾母暗沙", "黄岩岛", "钓鱼岛", "赤尾屿"],
        answer: "A",
        explanation: "中国领土的最南端是曾母暗沙，位于南沙群岛南端，北纬3°52′，东经112°17′附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国领土的最南端"
    },
    {
        id: 54,
        question: "下列哪个选项是世界上面积最大的高原？",
        options: ["巴西高原", "青藏高原", "东非高原", "南非高原"],
        answer: "A",
        explanation: "巴西高原是世界上面积最大的高原，面积约500多万平方公里，位于南美洲东部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的高原"
    },
    {
        id: 55,
        question: "中国的人口地理分界线是？",
        options: ["黑河-腾冲线", "秦岭-淮河线", "大兴安岭-阴山-贺兰山-巴颜喀拉山-冈底斯山线", "长城线"],
        answer: "A",
        explanation: "中国的人口地理分界线是黑河-腾冲线（胡焕庸线），该线以东人口稠密，以西人口稀疏。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国的人口地理分界线"
    },
    {
        id: 56,
        question: "世界上最长的山脉是？",
        options: ["安第斯山脉", "喜马拉雅山脉", "落基山脉", "阿尔卑斯山脉"],
        answer: "A",
        explanation: "安第斯山脉是世界上最长的山脉，全长约8900公里，位于南美洲西岸。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "世界最长的山脉"
    },
    {
        id: 57,
        question: "下列哪个选项不是中国的四大高原之一？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原", "帕米尔高原"],
        answer: "E",
        explanation: "中国的四大高原是青藏高原、内蒙古高原、黄土高原和云贵高原。帕米尔高原位于中国、塔吉克斯坦和阿富汗交界处，不属于中国的四大高原之一。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的四大高原"
    },
    {
        id: 58,
        question: "世界上流量最大的河流是？",
        options: ["亚马孙河", "刚果河", "长江", "密西西比河"],
        answer: "A",
        explanation: "亚马孙河是世界上流量最大的河流，年均径流量约6.9万亿立方米，位于南美洲北部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界流量最大的河流"
    },
    {
        id: 59,
        question: "中国的第一大岛是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "台湾岛是中国的第一大岛，面积约3.6万平方公里，位于东海南部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国第一大岛"
    },
    {
        id: 60,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 61,
        question: "下列哪个选项是中国的内海？",
        options: ["渤海", "黄海", "东海", "南海"],
        answer: "A",
        explanation: "渤海是中国的内海，位于中国东北部，被辽东半岛和山东半岛环抱。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的内海"
    },
    {
        id: 62,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 63,
        question: "中国的四大海域从北到南依次是？",
        options: ["渤海、黄海、东海、南海", "黄海、渤海、东海、南海", "渤海、东海、黄海、南海", "南海、东海、黄海、渤海"],
        answer: "A",
        explanation: "中国的四大海域从北到南依次是渤海、黄海、东海、南海。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的四大海域"
    },
    {
        id: 64,
        question: "世界上平均海拔最高的大洲是？",
        options: ["南极洲", "亚洲", "非洲", "南美洲"],
        answer: "A",
        explanation: "南极洲是世界上平均海拔最高的大洲，平均海拔约2350米，被厚厚的冰雪覆盖。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界平均海拔最高的大洲"
    },
    {
        id: 65,
        question: "中国的陆地面积约为？",
        options: ["960万平方公里", "990万平方公里", "1000万平方公里", "1260万平方公里"],
        answer: "A",
        explanation: "中国的陆地面积约为960万平方公里，居世界第三位。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的陆地面积"
    },
    {
        id: 66,
        question: "世界上人口最多的国家是？",
        options: ["中国", "印度", "美国", "印度尼西亚"],
        answer: "A",
        explanation: "中国是世界上人口最多的国家，根据最新数据，中国人口约为14.1亿。",
        category: "世界地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的国家"
    },
    {
        id: 67,
        question: "下列哪个选项是中国的最高峰？",
        options: ["珠穆朗玛峰", "乔戈里峰", "贡嘎山", "梅里雪山"],
        answer: "A",
        explanation: "珠穆朗玛峰是中国的最高峰，也是世界最高峰，海拔约8848.86米，位于中国与尼泊尔边境。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的最高峰"
    },
    {
        id: 68,
        question: "世界上面积最大的大洋是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "A",
        explanation: "太平洋是世界上面积最大的大洋，面积约1.81亿平方公里，占地球表面积的近三分之一。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "基础",
        knowledgePoint: "世界最大的大洋"
    },
    {
        id: 69,
        question: "中国的省级行政单位共有多少个？",
        options: ["34个", "33个", "32个", "31个"],
        answer: "A",
        explanation: "中国的省级行政单位共有34个，包括23个省、5个自治区、4个直辖市和2个特别行政区。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的省级行政单位数量"
    },
    {
        id: 70,
        question: "世界上面积最小的大洲是？",
        options: ["大洋洲", "欧洲", "南极洲", "南美洲"],
        answer: "A",
        explanation: "大洋洲是世界上面积最小的大洲，面积约897万平方公里，包括澳大利亚、新西兰和太平洋上的许多岛屿。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "中等",
        knowledgePoint: "世界最小的大洲"
    },
    {
        id: 71,
        question: "下列哪个选项是中国的第二大淡水湖？",
        options: ["洞庭湖", "鄱阳湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "洞庭湖是中国第二大淡水湖，位于湖南省北部，面积约2579平方公里。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第二大淡水湖"
    },
    {
        id: 72,
        question: "世界上最长的河流是？",
        options: ["尼罗河", "亚马孙河", "长江", "密西西比河"],
        answer: "A",
        explanation: "尼罗河是世界上最长的河流，全长约6670公里，流经非洲东北部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最长的河流"
    },
    {
        id: 73,
        question: "中国领土的最东端是？",
        options: ["黑龙江与乌苏里江主航道中心线的相交处", "曾母暗沙", "帕米尔高原", "漠河以北黑龙江主航道中心线"],
        answer: "A",
        explanation: "中国领土的最东端是黑龙江与乌苏里江主航道中心线的相交处，位于东经135°附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国领土的最东端"
    },
    {
        id: 74,
        question: "世界上面积最大的平原是？",
        options: ["亚马孙平原", "东欧平原", "西西伯利亚平原", "拉普拉塔平原"],
        answer: "A",
        explanation: "亚马孙平原是世界上面积最大的平原，面积约560万平方公里，位于南美洲北部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的平原"
    },
    {
        id: 75,
        question: "中国的少数民族中，人口最多的是？",
        options: ["壮族", "回族", "满族", "维吾尔族"],
        answer: "A",
        explanation: "壮族是中国人口最多的少数民族，主要分布在广西壮族自治区。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国人口最多的少数民族"
    },
    {
        id: 76,
        question: "世界上最大的热带雨林分布在？",
        options: ["亚马孙河流域", "刚果河流域", "东南亚地区", "非洲几内亚湾沿岸"],
        answer: "A",
        explanation: "世界上最大的热带雨林分布在亚马孙河流域，面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的热带雨林"
    },
    {
        id: 77,
        question: "下列哪个选项是中国的四大盆地之一？",
        options: ["塔里木盆地", "吐鲁番盆地", "准噶尔盆地", "柴达木盆地", "四川盆地"],
        answer: "B",
        explanation: "中国的四大盆地是塔里木盆地、准噶尔盆地、柴达木盆地和四川盆地。吐鲁番盆地是中国地势最低的盆地，但不属于四大盆地之一。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的四大盆地"
    },
    {
        id: 78,
        question: "世界上最大的岛屿群是？",
        options: ["马来群岛", "日本群岛", "菲律宾群岛", "不列颠群岛"],
        answer: "A",
        explanation: "马来群岛是世界上最大的岛屿群，由2万多个岛屿组成，位于东南亚地区。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "中等",
        knowledgePoint: "世界最大的岛屿群"
    },
    {
        id: 79,
        question: "中国的第二大岛是？",
        options: ["海南岛", "台湾岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "海南岛是中国的第二大岛，面积约3.4万平方公里，位于南海北部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国第二大岛"
    },
    {
        id: 80,
        question: "世界上面积最大的国家公园是？",
        options: ["东北格陵兰国家公园", "黄石国家公园", "克鲁格国家公园", "卡卡杜国家公园"],
        answer: "A",
        explanation: "东北格陵兰国家公园是世界上面积最大的国家公园，面积约97.2万平方公里，位于格陵兰岛东北部。",
        category: "世界地理",
        subcategory: "自然环境与保护",
        difficulty: "中等",
        knowledgePoint: "世界最大的国家公园"
    },
    {
        id: 81,
        question: "下列哪个选项是中国的直辖市？",
        options: ["北京", "上海", "天津", "重庆", "以上都是"],
        answer: "E",
        explanation: "中国的直辖市有北京、上海、天津和重庆四个。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的直辖市"
    },
    {
        id: 82,
        question: "世界上面积最小的国家是？",
        options: ["梵蒂冈", "摩纳哥", "瑙鲁", "图瓦卢"],
        answer: "A",
        explanation: "梵蒂冈是世界上面积最小的国家，面积仅为0.44平方公里，位于意大利首都罗马城的西北角。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最小的国家"
    },
    {
        id: 83,
        question: "中国的陆地邻国共有多少个？",
        options: ["14个", "15个", "16个", "17个"],
        answer: "A",
        explanation: "中国的陆地邻国有14个，分别是俄罗斯、印度、朝鲜、越南、老挝、缅甸、蒙古、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、阿富汗、巴基斯坦、尼泊尔和不丹。",
        category: "中国地理",
        subcategory: "邻国与边界",
        difficulty: "中等",
        knowledgePoint: "中国的陆地邻国数量"
    },
    {
        id: 84,
        question: "世界上人口最多的大洲是？",
        options: ["亚洲", "非洲", "欧洲", "北美洲"],
        answer: "A",
        explanation: "亚洲是世界上人口最多的大洲，根据最新数据，亚洲人口约为45亿，占世界总人口的60%以上。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的大洲"
    },
    {
        id: 85,
        question: "中国的第一大河流是？",
        options: ["长江", "黄河", "珠江", "黑龙江"],
        answer: "A",
        explanation: "长江是中国的第一大河流，全长约6300公里，是世界第三长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大河流"
    },
    {
        id: 86,
        question: "世界上面积最大的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上面积最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 87,
        question: "中国的气候类型中，分布最广的是？",
        options: ["温带大陆性气候", "温带季风气候", "亚热带季风气候", "高原山地气候"],
        answer: "A",
        explanation: "温带大陆性气候是中国分布最广的气候类型，主要分布在中国的西北内陆地区。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国分布最广的气候类型"
    },
    {
        id: 88,
        question: "世界上面积最大的海洋是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "A",
        explanation: "太平洋是世界上面积最大的海洋，面积约1.81亿平方公里，占地球表面积的近三分之一。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "基础",
        knowledgePoint: "世界最大的海洋"
    },
    {
        id: 89,
        question: "中国的省级行政单位中，面积最大的是？",
        options: ["新疆维吾尔自治区", "西藏自治区", "内蒙古自治区", "青海省"],
        answer: "A",
        explanation: "新疆维吾尔自治区是中国面积最大的省级行政单位，面积约166万平方公里。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的省级行政单位"
    },
    {
        id: 90,
        question: "世界上最深的海沟是？",
        options: ["马里亚纳海沟", "汤加海沟", "日本海沟", "千岛海沟"],
        answer: "A",
        explanation: "马里亚纳海沟是世界上最深的海沟，最深处达11034米，位于西太平洋马里亚纳群岛附近。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "世界最深的海沟"
    },
    {
        id: 91,
        question: "中国的人口政策中，提倡的是？",
        options: ["晚婚晚育，少生优生", "鼓励生育", "限制生育", "自由生育"],
        answer: "A",
        explanation: "中国的人口政策提倡晚婚晚育，少生优生，以控制人口数量，提高人口素质。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国的人口政策"
    },
    {
        id: 92,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 93,
        question: "中国的地形特点是？",
        options: ["地形复杂多样，山区面积广大", "以平原为主", "以高原为主", "以盆地为主"],
        answer: "A",
        explanation: "中国的地形特点是地形复杂多样，山区面积广大。五种基本地形类型在我国都有分布，其中山地、丘陵和比较崎岖的高原统称为山区，约占全国陆地面积的2/3。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的地形特点"
    },
    {
        id: 94,
        question: "世界上最长的运河是？",
        options: ["京杭大运河", "苏伊士运河", "巴拿马运河", "基尔运河"],
        answer: "A",
        explanation: "京杭大运河是世界上最长的运河，北起北京，南至杭州，全长约1794公里，是中国古代劳动人民创造的一项伟大工程。",
        category: "中国地理",
        subcategory: "河流与运河",
        difficulty: "基础",
        knowledgePoint: "世界最长的运河"
    },
    {
        id: 95,
        question: "中国的自然资源中，总量丰富，但人均不足的是？",
        options: ["土地资源", "水资源", "矿产资源", "以上都是"],
        answer: "D",
        explanation: "中国的自然资源总量丰富，但由于人口众多，人均占有量不足，这是中国自然资源的基本特点。",
        category: "中国地理",
        subcategory: "自然资源",
        difficulty: "中等",
        knowledgePoint: "中国自然资源的特点"
    },
    {
        id: 96,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 97,
        question: "中国的四大高原中，海拔最高的是？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原"],
        answer: "A",
        explanation: "青藏高原是中国海拔最高的高原，平均海拔在4000米以上，有'世界屋脊'之称。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国海拔最高的高原"
    },
    {
        id: 98,
        question: "世界上人口最多的城市是？",
        options: ["东京", "上海", "纽约", "孟买"],
        answer: "A",
        explanation: "东京是世界上人口最多的城市，根据最新数据，东京都市圈的人口约为3700万。",
        category: "世界地理",
        subcategory: "人口与城市",
        difficulty: "中等",
        knowledgePoint: "世界人口最多的城市"
    },
    {
        id: 99,
        question: "中国的省级行政单位中，人口最多的是？",
        options: ["广东省", "山东省", "河南省", "四川省"],
        answer: "A",
        explanation: "广东省是中国人口最多的省级行政单位，根据最新数据，广东省的人口约为1.13亿。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国人口最多的省级行政单位"
    },
    {
        id: 100,
        question: "世界上面积最小的大洋是？",
        options: ["北冰洋", "印度洋", "大西洋", "太平洋"],
        answer: "A",
        explanation: "北冰洋是世界上面积最小的大洋，面积约1475万平方公里，位于地球的最北端。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "基础",
        knowledgePoint: "世界最小的大洋"
    },
    {
        id: 101,
        question: "中国的四大佛教名山不包括下列哪一项？",
        options: ["泰山", "五台山", "普陀山", "峨眉山", "九华山"],
        answer: "A",
        explanation: "中国的四大佛教名山是五台山、普陀山、峨眉山和九华山。泰山是中国的五岳之首，不属于四大佛教名山。",
        category: "中国地理",
        subcategory: "文化与旅游",
        difficulty: "中等",
        knowledgePoint: "中国的四大佛教名山"
    },
    {
        id: 102,
        question: "世界上面积最大的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上面积最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 103,
        question: "中国的第一大岛是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "台湾岛是中国的第一大岛，面积约3.6万平方公里，位于东海南部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国第一大岛"
    },
    {
        id: 104,
        question: "世界上面积最大的热带雨林气候区位于？",
        options: ["亚马孙平原", "刚果盆地", "东南亚地区", "非洲几内亚湾沿岸"],
        answer: "A",
        explanation: "世界上面积最大的热带雨林气候区位于亚马孙平原，面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界最大的热带雨林气候区"
    },
    {
        id: 105,
        question: "中国的最西端位于？",
        options: ["帕米尔高原", "曾母暗沙", "黑龙江与乌苏里江主航道中心线的相交处", "漠河以北黑龙江主航道中心线"],
        answer: "A",
        explanation: "中国的最西端位于帕米尔高原，东经73°附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的最西端"
    },
    {
        id: 106,
        question: "世界上面积最大的湖泊是？",
        options: ["里海", "苏必利尔湖", "贝加尔湖", "维多利亚湖"],
        answer: "A",
        explanation: "里海是世界上面积最大的湖泊，面积约37.1万平方公里，位于欧洲和亚洲的交界处。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最大的湖泊"
    },
    {
        id: 107,
        question: "中国的第三大河流是？",
        options: ["珠江", "黄河", "长江", "黑龙江"],
        answer: "A",
        explanation: "珠江是中国的第三大河流，全长约2320公里，年径流量居全国第二位。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "中国第三大河流"
    },
    {
        id: 108,
        question: "世界上面积最大的高原是？",
        options: ["巴西高原", "青藏高原", "南非高原", "东非高原"],
        answer: "A",
        explanation: "巴西高原是世界上面积最大的高原，面积约500万平方公里，位于南美洲东部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的高原"
    },
    {
        id: 109,
        question: "中国的五个自治区不包括下列哪一项？",
        options: ["宁夏回族自治区", "广西壮族自治区", "西藏自治区", "新疆维吾尔自治区", "内蒙古自治区", "云南傣族自治区"],
        answer: "F",
        explanation: "中国的五个自治区是宁夏回族自治区、广西壮族自治区、西藏自治区、新疆维吾尔自治区和内蒙古自治区。云南省没有傣族自治区，而是有西双版纳傣族自治州等自治州。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的五个自治区"
    },
    {
        id: 110,
        question: "世界上人口自然增长率最高的大洲是？",
        options: ["非洲", "亚洲", "南美洲", "大洋洲"],
        answer: "A",
        explanation: "非洲是世界上人口自然增长率最高的大洲，人口自然增长率约为2.5%，远高于世界平均水平。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "中等",
        knowledgePoint: "世界人口自然增长率最高的大洲"
    },
    {
        id: 111,
        question: "中国的母亲河是？",
        options: ["黄河", "长江", "珠江", "黑龙江"],
        answer: "A",
        explanation: "黄河是中国的母亲河，是中华民族的摇篮，全长约5464公里，是中国第二长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国的母亲河"
    },
    {
        id: 112,
        question: "世界上最长的山脉是？",
        options: ["安第斯山脉", "喜马拉雅山脉", "阿尔卑斯山脉", "落基山脉"],
        answer: "A",
        explanation: "安第斯山脉是世界上最长的山脉，全长约8900公里，位于南美洲西岸。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最长的山脉"
    },
    {
        id: 113,
        question: "中国的第一大淡水湖是？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "鄱阳湖是中国第一大淡水湖，位于江西省北部，面积约3150平方公里（枯水期）至4125平方公里（洪水期）。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大淡水湖"
    },
    {
        id: 114,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 115,
        question: "中国的四个直辖市中，面积最大的是？",
        options: ["重庆", "北京", "上海", "天津"],
        answer: "A",
        explanation: "重庆是中国四个直辖市中面积最大的，面积约8.24万平方公里。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的直辖市"
    },
    {
        id: 116,
        question: "世界上最深的湖泊是？",
        options: ["贝加尔湖", "坦噶尼喀湖", "里海", "苏必利尔湖"],
        answer: "A",
        explanation: "贝加尔湖是世界上最深的湖泊，最深处达1637米，位于俄罗斯东西伯利亚南部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最深的湖泊"
    },
    {
        id: 117,
        question: "中国的人口分布特点是？",
        options: ["东多西少", "西多东少", "南多北少", "北多南少"],
        answer: "A",
        explanation: "中国的人口分布特点是东多西少，以黑河-腾冲一线为界，该线以东地区人口稠密，以西地区人口稀疏。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国的人口分布特点"
    },
    {
        id: 118,
        question: "世界上面积最小的国家是？",
        options: ["梵蒂冈", "摩纳哥", "瑙鲁", "图瓦卢"],
        answer: "A",
        explanation: "梵蒂冈是世界上面积最小的国家，面积仅为0.44平方公里，位于意大利首都罗马城的西北角。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最小的国家"
    },
    {
        id: 119,
        question: "中国的地形地势特点是？",
        options: ["西高东低，呈三级阶梯分布", "东高西低，呈三级阶梯分布", "南高北低，呈三级阶梯分布", "北高南低，呈三级阶梯分布"],
        answer: "A",
        explanation: "中国的地形地势特点是西高东低，呈三级阶梯分布。第一级阶梯是青藏高原，平均海拔在4000米以上；第二级阶梯是青藏高原以东、以北的广大地区，海拔在1000-2000米之间；第三级阶梯是大兴安岭-太行山-巫山-雪峰山一线以东的地区，海拔在500米以下。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的地形地势特点"
    },
    {
        id: 120,
        question: "世界上面积最大的热带雨林分布在？",
        options: ["亚马孙河流域", "刚果河流域", "东南亚地区", "非洲几内亚湾沿岸"],
        answer: "A",
        explanation: "世界上面积最大的热带雨林分布在亚马孙河流域，面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的热带雨林"
    },
    {
        id: 121,
        question: "中国的第三大岛是？",
        options: ["崇明岛", "台湾岛", "海南岛", "舟山岛"],
        answer: "A",
        explanation: "崇明岛是中国的第三大岛，面积约1200.68平方公里，位于长江入海口。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "中等",
        knowledgePoint: "中国第三大岛"
    },
    {
        id: 122,
        question: "世界上面积最大的大洲是？",
        options: ["亚洲", "非洲", "北美洲", "南美洲"],
        answer: "A",
        explanation: "亚洲是世界上面积最大的大洲，面积约4457.9万平方公里，占地球陆地总面积的29.4%。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最大的大洲"
    },
    {
        id: 123,
        question: "中国的内海不包括下列哪一项？",
        options: ["渤海", "黄海", "琼州海峡", "台湾海峡"],
        answer: "B",
        explanation: "中国的内海包括渤海和琼州海峡。黄海和东海、南海一样，属于边缘海，不属于内海。",
        category: "中国地理",
        subcategory: "海洋与海峡",
        difficulty: "较难",
        knowledgePoint: "中国的内海"
    },
    {
        id: 124,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 125,
        question: "中国的领土面积约为？",
        options: ["960万平方公里", "997万平方公里", "937万平方公里", "1709万平方公里"],
        answer: "A",
        explanation: "中国的领土面积约为960万平方公里，仅次于俄罗斯和加拿大，居世界第三位。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的领土面积"
    },
    {
        id: 126,
        question: "世界上人口最多的国家是？",
        options: ["中国", "印度", "美国", "印度尼西亚"],
        answer: "A",
        explanation: "中国是世界上人口最多的国家，根据最新数据，中国人口约为14.1亿。",
        category: "世界地理",
        subcategory: "人口与国家",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的国家"
    },
    {
        id: 127,
        question: "中国的气候复杂多样，主要原因不包括下列哪一项？",
        options: ["领土面积广大", "地形复杂多样", "跨纬度广", "濒临海洋"],
        answer: "D",
        explanation: "中国的气候复杂多样，主要原因包括领土面积广大、地形复杂多样和跨纬度广。濒临海洋主要影响的是中国的季风气候，而不是气候复杂多样的主要原因。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "较难",
        knowledgePoint: "中国气候复杂多样的原因"
    },
    {
        id: 128,
        question: "世界上最长的人工运河是？",
        options: ["京杭大运河", "苏伊士运河", "巴拿马运河", "基尔运河"],
        answer: "A",
        explanation: "京杭大运河是世界上最长的人工运河，北起北京，南至杭州，全长约1794公里，是中国古代劳动人民创造的一项伟大工程。",
        category: "中国地理",
        subcategory: "河流与运河",
        difficulty: "基础",
        knowledgePoint: "世界最长的人工运河"
    },
    {
        id: 129,
        question: "中国的四大盆地中，海拔最高的是？",
        options: ["柴达木盆地", "塔里木盆地", "准噶尔盆地", "四川盆地"],
        answer: "A",
        explanation: "柴达木盆地是中国四大盆地中海拔最高的，平均海拔在2600-3000米之间，位于青海省西北部。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国海拔最高的盆地"
    },
    {
        id: 130,
        question: "世界上面积最大的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上面积最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 131,
        question: "中国的第二大淡水湖是？",
        options: ["洞庭湖", "鄱阳湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "洞庭湖是中国第二大淡水湖，位于湖南省北部，面积约2579.2平方公里。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第二大淡水湖"
    },
    {
        id: 132,
        question: "世界上面积最小的大洲是？",
        options: ["大洋洲", "欧洲", "南极洲", "南美洲"],
        answer: "A",
        explanation: "大洋洲是世界上面积最小的大洲，面积约897万平方公里，包括澳大利亚大陆、塔斯马尼亚岛、新西兰南北二岛等。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最小的大洲"
    },
    {
        id: 133,
        question: "中国的五个少数民族自治区中，成立最早的是？",
        options: ["内蒙古自治区", "新疆维吾尔自治区", "广西壮族自治区", "宁夏回族自治区", "西藏自治区"],
        answer: "A",
        explanation: "内蒙古自治区成立于1947年5月1日，是中国成立最早的少数民族自治区。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国成立最早的少数民族自治区"
    },
    {
        id: 134,
        question: "世界上流量最大、流域面积最广的河流是？",
        options: ["亚马孙河", "尼罗河", "长江", "密西西比河"],
        answer: "A",
        explanation: "亚马孙河是世界上流量最大、流域面积最广的河流，流量约为每秒21.9万立方米，流域面积约691.5万平方公里。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界流量最大的河流"
    },
    {
        id: 135,
        question: "中国的领土最南端是？",
        options: ["曾母暗沙", "黄岩岛", "永兴岛", "钓鱼岛"],
        answer: "A",
        explanation: "中国的领土最南端是曾母暗沙，位于北纬3°58′，东经112°17′附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国领土的最南端"
    },
    {
        id: 136,
        question: "世界上面积最大的国家公园是？",
        options: ["东北格陵兰国家公园", "黄石国家公园", "克鲁格国家公园", "班夫国家公园"],
        answer: "A",
        explanation: "东北格陵兰国家公园是世界上面积最大的国家公园，面积约97.2万平方公里，位于格陵兰岛东北部。",
        category: "世界地理",
        subcategory: "自然保护区",
        difficulty: "较难",
        knowledgePoint: "世界最大的国家公园"
    },
    {
        id: 137,
        question: "中国的人口最多的少数民族是？",
        options: ["壮族", "回族", "满族", "维吾尔族"],
        answer: "A",
        explanation: "壮族是中国人口最多的少数民族，根据最新数据，壮族人口约为1693万人。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国人口最多的少数民族"
    },
    {
        id: 138,
        question: "世界上面积最大的热带雨林国家是？",
        options: ["巴西", "刚果（金）", "印度尼西亚", "秘鲁"],
        answer: "A",
        explanation: "巴西是世界上面积最大的热带雨林国家，拥有世界上最大的热带雨林——亚马孙雨林的大部分区域。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界热带雨林面积最大的国家"
    },
    {
        id: 139,
        question: "中国的地势最高的盆地是？",
        options: ["柴达木盆地", "塔里木盆地", "准噶尔盆地", "四川盆地"],
        answer: "A",
        explanation: "柴达木盆地是中国地势最高的盆地，平均海拔在2600-3000米之间，位于青海省西北部。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国地势最高的盆地"
    },
    {
        id: 140,
        question: "世界上面积最大的岛屿是？",
        options: ["格陵兰岛", "新几内亚岛", "加里曼丹岛", "马达加斯加岛"],
        answer: "A",
        explanation: "格陵兰岛是世界上面积最大的岛屿，面积约216.6万平方公里，位于北美洲东北部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的岛屿"
    },
    {
        id: 141,
        question: "中国的最大的岛屿是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "台湾岛是中国最大的岛屿，面积约3.6万平方公里，位于东海南部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国最大的岛屿"
    },
    {
        id: 142,
        question: "世界上面积最大的咸水湖是？",
        options: ["里海", "青海湖", "咸海", "死海"],
        answer: "A",
        explanation: "里海是世界上面积最大的咸水湖，面积约37.1万平方公里，位于欧洲和亚洲的交界处。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最大的咸水湖"
    },
    {
        id: 143,
        question: "中国的第一大岛是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "台湾岛是中国的第一大岛，面积约3.6万平方公里，位于东海南部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国第一大岛"
    },
    {
        id: 144,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 145,
        question: "中国的四个直辖市中，人口最多的是？",
        options: ["重庆", "北京", "上海", "天津"],
        answer: "A",
        explanation: "重庆是中国四个直辖市中人口最多的，根据最新数据，重庆人口约为3102万人。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国人口最多的直辖市"
    },
    {
        id: 146,
        question: "世界上面积最大的高原是？",
        options: ["巴西高原", "青藏高原", "南非高原", "东非高原"],
        answer: "A",
        explanation: "巴西高原是世界上面积最大的高原，面积约500万平方公里，位于南美洲东部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的高原"
    },
    {
        id: 147,
        question: "中国的母亲河是？",
        options: ["黄河", "长江", "珠江", "黑龙江"],
        answer: "A",
        explanation: "黄河是中国的母亲河，是中华民族的摇篮，全长约5464公里，是中国第二长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国的母亲河"
    },
    {
        id: 148,
        question: "世界上最长的山脉是？",
        options: ["安第斯山脉", "喜马拉雅山脉", "阿尔卑斯山脉", "落基山脉"],
        answer: "A",
        explanation: "安第斯山脉是世界上最长的山脉，全长约8900公里，位于南美洲西岸。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最长的山脉"
    },
    {
        id: 149,
        question: "中国的第一大淡水湖是？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖"],
        answer: "A",
        explanation: "鄱阳湖是中国第一大淡水湖，位于江西省北部，面积约3150平方公里（枯水期）至4125平方公里（洪水期）。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大淡水湖"
    },
    {
        id: 150,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 151,
        question: "中国的最东端位于？",
        options: ["黑龙江与乌苏里江主航道中心线的相交处", "曾母暗沙", "帕米尔高原", "漠河以北黑龙江主航道中心线"],
        answer: "A",
        explanation: "中国的最东端位于黑龙江与乌苏里江主航道中心线的相交处，东经135°附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的最东端"
    },
    {
        id: 152,
        question: "世界上人口自然增长率最低的大洲是？",
        options: ["欧洲", "北美洲", "大洋洲", "亚洲"],
        answer: "A",
        explanation: "欧洲是世界上人口自然增长率最低的大洲，人口自然增长率约为-0.1%，部分国家甚至出现了人口负增长。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "较难",
        knowledgePoint: "世界人口自然增长率最低的大洲"
    },
    {
        id: 153,
        question: "中国的第二大河流是？",
        options: ["黄河", "长江", "珠江", "黑龙江"],
        answer: "A",
        explanation: "黄河是中国的第二大河流，全长约5464公里，流域面积约75.2万平方公里。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第二大河流"
    },
    {
        id: 154,
        question: "世界上最深的海沟是？",
        options: ["马里亚纳海沟", "汤加海沟", "日本海沟", "菲律宾海沟"],
        answer: "A",
        explanation: "马里亚纳海沟是世界上最深的海沟，最深处达11034米，位于西太平洋马里亚纳群岛附近。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "世界最深的海沟"
    },
    {
        id: 155,
        question: "中国的最北端位于？",
        options: ["漠河以北黑龙江主航道中心线", "曾母暗沙", "帕米尔高原", "黑龙江与乌苏里江主航道中心线的相交处"],
        answer: "A",
        explanation: "中国的最北端位于漠河以北黑龙江主航道中心线，北纬53°附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的最北端"
    },
    {
        id: 156,
        question: "世界上面积最大的平原是？",
        options: ["亚马孙平原", "东欧平原", "西西伯利亚平原", "拉普拉塔平原"],
        answer: "A",
        explanation: "亚马孙平原是世界上面积最大的平原，面积约560万平方公里，位于南美洲北部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的平原"
    },
    {
        id: 157,
        question: "中国的第一大河流是？",
        options: ["长江", "黄河", "珠江", "黑龙江"],
        answer: "A",
        explanation: "长江是中国的第一大河流，全长约6300公里，流域面积约180万平方公里，是世界第三长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大河流"
    },
    {
        id: 158,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 159,
        question: "中国的五个自治区中，面积最大的是？",
        options: ["新疆维吾尔自治区", "内蒙古自治区", "西藏自治区", "广西壮族自治区", "宁夏回族自治区"],
        answer: "A",
        explanation: "新疆维吾尔自治区是中国五个自治区中面积最大的，面积约166万平方公里，位于中国西北部。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的自治区"
    },
    {
        id: 160,
        question: "世界上面积最大的大洋是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "A",
        explanation: "太平洋是世界上面积最大的大洋，面积约1.8134亿平方公里，占地球海洋总面积的49.8%。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最大的大洋"
    },
    {
        id: 161,
        question: "中国的人口政策的基本内容是？",
        options: ["控制人口数量，提高人口素质", "鼓励生育，增加人口数量", "晚婚晚育，少生优生", "计划生育，人人有责"],
        answer: "A",
        explanation: "中国的人口政策的基本内容是控制人口数量，提高人口素质。这是中国长期坚持的一项基本国策。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国的人口政策"
    },
    {
        id: 162,
        question: "世界上面积最小的大洋是？",
        options: ["北冰洋", "印度洋", "大西洋", "太平洋"],
        answer: "A",
        explanation: "北冰洋是世界上面积最小的大洋，面积约1475万平方公里，位于地球的最北端。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最小的大洋"
    },
    {
        id: 163,
        question: "中国的地形类型复杂多样，其中面积最大的地形类型是？",
        options: ["山地", "高原", "平原", "盆地", "丘陵"],
        answer: "A",
        explanation: "中国的地形类型复杂多样，其中山地面积最大，约占全国陆地总面积的33%。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的地形类型"
    },
    {
        id: 164,
        question: "世界上人口最多的大洲是？",
        options: ["亚洲", "非洲", "欧洲", "北美洲"],
        answer: "A",
        explanation: "亚洲是世界上人口最多的大洲，根据最新数据，亚洲人口约为45.4亿，占世界总人口的60%以上。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的大洲"
    },
    {
        id: 165,
        question: "中国的四大高原中，面积最大的是？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原"],
        answer: "A",
        explanation: "青藏高原是中国四大高原中面积最大的，面积约250万平方公里，平均海拔在4000米以上，被称为'世界屋脊'。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的高原"
    },
    {
        id: 166,
        question: "世界上面积最大的国家是？",
        options: ["俄罗斯", "加拿大", "中国", "美国"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 167,
        question: "中国的气候类型中，分布最广的是？",
        options: ["温带大陆性气候", "亚热带季风气候", "温带季风气候", "高原山地气候"],
        answer: "A",
        explanation: "温带大陆性气候是中国分布最广的气候类型，主要分布在中国的西北地区和内蒙古自治区等地。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国分布最广的气候类型"
    },
    {
        id: 168,
        question: "世界上面积最大的热带雨林气候区位于？",
        options: ["亚马孙平原", "刚果盆地", "东南亚地区", "非洲几内亚湾沿岸"],
        answer: "A",
        explanation: "世界上面积最大的热带雨林气候区位于亚马孙平原，面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界最大的热带雨林气候区"
    },
    {
        id: 169,
        question: "中国的第一大岛是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: "A",
        explanation: "台湾岛是中国的第一大岛，面积约3.6万平方公里，位于东海南部。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国第一大岛"
    },
    {
        id: 170,
        question: "世界上面积最大的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上面积最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 171,
        question: "中国的四个直辖市中，成立最晚的是？",
        options: ["重庆", "北京", "上海", "天津"],
        answer: "A",
        explanation: "重庆是中国四个直辖市中成立最晚的，1997年6月18日正式成立为直辖市。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国成立最晚的直辖市"
    },
    {
        id: 172,
        question: "世界上面积最大的湖泊是？",
        options: ["里海", "苏必利尔湖", "贝加尔湖", "维多利亚湖"],
        answer: "A",
        explanation: "里海是世界上面积最大的湖泊，面积约37.1万平方公里，位于欧洲和亚洲的交界处。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最大的湖泊"
    },
    {
        id: 173,
        question: "中国的人口分布特点是？",
        options: ["东多西少", "西多东少", "南多北少", "北多南少"],
        answer: "A",
        explanation: "中国的人口分布特点是东多西少，以黑河-腾冲一线为界，该线以东地区人口稠密，以西地区人口稀疏。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国的人口分布特点"
    },
    {
        id: 174,
        question: "世界上最深的湖泊是？",
        options: ["贝加尔湖", "坦噶尼喀湖", "里海", "苏必利尔湖"],
        answer: "A",
        explanation: "贝加尔湖是世界上最深的湖泊，最深处达1637米，位于俄罗斯东西伯利亚南部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最深的湖泊"
    },
    {
        id: 175,
        question: "中国的地形地势特点是？",
        options: ["西高东低，呈三级阶梯分布", "东高西低，呈三级阶梯分布", "南高北低，呈三级阶梯分布", "北高南低，呈三级阶梯分布"],
        answer: "A",
        explanation: "中国的地形地势特点是西高东低，呈三级阶梯分布。第一级阶梯是青藏高原，平均海拔在4000米以上；第二级阶梯是青藏高原以东、以北的广大地区，海拔在1000-2000米之间；第三级阶梯是大兴安岭-太行山-巫山-雪峰山一线以东的地区，海拔在500米以下。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的地形地势特点"
    },
    {
        id: 176,
        question: "世界上面积最大的大洲是？",
        options: ["亚洲", "非洲", "北美洲", "南美洲"],
        answer: "A",
        explanation: "亚洲是世界上面积最大的大洲，面积约4457.9万平方公里，占地球陆地总面积的29.4%。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最大的大洲"
    },
    {
        id: 177,
        question: "中国的内海是？",
        options: ["渤海和琼州海峡", "黄海和东海", "南海和台湾海峡", "渤海和黄海"],
        answer: "A",
        explanation: "中国的内海是渤海和琼州海峡。内海是指深入大陆内部，除了有狭窄水道跟外海或大洋相通外，四周被大陆内部、半岛、岛屿或群岛包围的海域。",
        category: "中国地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "中国的内海"
    },
    {
        id: 178,
        question: "世界上面积最大的沙漠是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 179,
        question: "中国的领土面积约为？",
        options: ["960万平方公里", "997万平方公里", "937万平方公里", "1709万平方公里"],
        answer: "A",
        explanation: "中国的领土面积约为960万平方公里，仅次于俄罗斯和加拿大，居世界第三位。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的领土面积"
    },
    {
        id: 180,
        question: "世界上人口最多的国家是？",
        options: ["中国", "印度", "美国", "印度尼西亚"],
        answer: "A",
        explanation: "中国是世界上人口最多的国家，根据最新数据，中国人口约为14.1亿。",
        category: "世界地理",
        subcategory: "人口与国家",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的国家"
    },
    // 判断题 (30题: 181-210)
    {
        id: 181,
        question: "中国的首都是北京。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "北京是中国的首都，是全国的政治、文化和国际交往中心。",
        category: "中国地理",
        subcategory: "城市与首都",
        difficulty: "基础",
        knowledgePoint: "中国的首都"
    },
    {
        id: 182,
        question: "长江是世界上最长的河流。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "长江是中国最长的河流，世界第三长河，世界第一长河是尼罗河。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "世界最长的河流"
    },
    {
        id: 183,
        question: "中国的地形特点是西高东低，呈三级阶梯分布。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的地形地势特点是西高东低，呈三级阶梯分布，这一特点对中国的气候、河流等产生了深远影响。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的地形地势特点"
    },
    {
        id: 184,
        question: "世界上面积最大的海洋是大西洋。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的海洋是太平洋，面积约1.8134亿平方公里，占地球海洋总面积的49.8%。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界最大的海洋"
    },
    {
        id: 185,
        question: "中国的人口政策的基本内容是控制人口数量，提高人口素质。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的人口政策的基本内容是控制人口数量，提高人口素质，这是中国长期坚持的一项基本国策。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国的人口政策"
    },
    {
        id: 186,
        question: "珠穆朗玛峰是世界上最高的山峰。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "珠穆朗玛峰是世界上最高的山峰，海拔约8848.86米，位于中国与尼泊尔边境线上。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "世界最高的山峰"
    },
    {
        id: 187,
        question: "中国的领土最南端是曾母暗沙。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的领土最南端是曾母暗沙，位于北纬3°58′，东经112°17′附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国领土的最南端"
    },
    {
        id: 188,
        question: "世界上面积最大的国家是中国。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的国家是俄罗斯，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 189,
        question: "中国的气候类型复杂多样，季风气候显著。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国地域辽阔，气候类型复杂多样，同时由于海陆热力性质差异显著，季风气候尤为突出。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国的气候特点"
    },
    {
        id: 190,
        question: "撒哈拉沙漠是世界上面积最大的沙漠。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 191,
        question: "中国的人口分布特点是东多西少。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的人口分布特点是东多西少，以黑河-腾冲一线为界，该线以东地区人口稠密，以西地区人口稀疏。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国的人口分布特点"
    },
    {
        id: 192,
        question: "世界上最深的湖泊是贝加尔湖。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "贝加尔湖是世界上最深的湖泊，最深处达1637米，位于俄罗斯东西伯利亚南部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最深的湖泊"
    },
    {
        id: 193,
        question: "中国的第一大淡水湖是洞庭湖。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "中国的第一大淡水湖是鄱阳湖，位于江西省北部，面积约3150平方公里（枯水期）至4125平方公里（洪水期）。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国第一大淡水湖"
    },
    {
        id: 194,
        question: "世界上面积最大的热带雨林气候区位于亚马孙平原。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "世界上面积最大的热带雨林气候区位于亚马孙平原，面积约550万平方公里。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界最大的热带雨林气候区"
    },
    {
        id: 195,
        question: "中国的五个少数民族自治区中，成立最早的是内蒙古自治区。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "内蒙古自治区成立于1947年5月1日，是中国成立最早的少数民族自治区。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国成立最早的少数民族自治区"
    },
    {
        id: 196,
        question: "世界上面积最小的大洲是欧洲。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最小的大洲是大洋洲，面积约897万平方公里，包括澳大利亚大陆、塔斯马尼亚岛、新西兰南北二岛等。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "中等",
        knowledgePoint: "世界最小的大洲"
    },
    {
        id: 197,
        question: "中国的母亲河是黄河。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "黄河是中国的母亲河，是中华民族的摇篮，全长约5464公里，是中国第二长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国的母亲河"
    },
    {
        id: 198,
        question: "世界上最长的山脉是喜马拉雅山脉。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上最长的山脉是安第斯山脉，全长约8900公里，位于南美洲西岸。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最长的山脉"
    },
    {
        id: 199,
        question: "中国的地形类型中，面积最大的是山地。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的地形类型复杂多样，其中山地面积最大，约占全国陆地总面积的33%。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国面积最大的地形类型"
    },
    {
        id: 200,
        question: "世界上面积最大的岛屿是新几内亚岛。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的岛屿是格陵兰岛，面积约216.6万平方公里，位于北美洲东北部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "中等",
        knowledgePoint: "世界最大的岛屿"
    },
    {
        id: 201,
        question: "中国的内海包括渤海和琼州海峡。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的内海是渤海和琼州海峡。内海是指深入大陆内部，除了有狭窄水道跟外海或大洋相通外，四周被大陆内部、半岛、岛屿或群岛包围的海域。",
        category: "中国地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "中国的内海"
    },
    {
        id: 202,
        question: "世界上人口最多的大洲是亚洲。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "亚洲是世界上人口最多的大洲，根据最新数据，亚洲人口约为45.4亿，占世界总人口的60%以上。",
        category: "世界地理",
        subcategory: "人口与大洲",
        difficulty: "基础",
        knowledgePoint: "世界人口最多的大洲"
    },
    {
        id: 203,
        question: "中国的四个直辖市中，面积最大的是北京。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "中国的四个直辖市中，面积最大的是重庆，面积约8.24万平方公里。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "较难",
        knowledgePoint: "中国面积最大的直辖市"
    },
    {
        id: 204,
        question: "世界上面积最大的高原是青藏高原。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的高原是巴西高原，面积约500万平方公里，位于南美洲东部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界最大的高原"
    },
    {
        id: 205,
        question: "中国的领土面积约为960万平方公里。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的领土面积约为960万平方公里，仅次于俄罗斯和加拿大，居世界第三位。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的领土面积"
    },
    {
        id: 206,
        question: "世界上面积最大的平原是东欧平原。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的平原是亚马孙平原，面积约560万平方公里，位于南美洲北部。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "较难",
        knowledgePoint: "世界最大的平原"
    },
    {
        id: 207,
        question: "中国的气候类型中，分布最广的是温带大陆性气候。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "温带大陆性气候是中国分布最广的气候类型，主要分布在中国的西北地区和内蒙古自治区等地。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国分布最广的气候类型"
    },
    {
        id: 208,
        question: "世界上面积最大的湖泊是苏必利尔湖。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的湖泊是里海，面积约37.1万平方公里，位于欧洲和亚洲的交界处。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最大的湖泊"
    },
    {
        id: 209,
        question: "中国的人口最多的少数民族是壮族。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "壮族是中国人口最多的少数民族，根据最新数据，壮族人口约为1693万人。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "基础",
        knowledgePoint: "中国人口最多的少数民族"
    },
    {
        id: 210,
        question: "世界上面积最大的国家公园是黄石国家公园。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的国家公园是东北格陵兰国家公园，面积约97.2万平方公里，位于格陵兰岛东北部。",
        category: "世界地理",
        subcategory: "自然保护区",
        difficulty: "较难",
        knowledgePoint: "世界最大的国家公园"
    },
    // 多项选择题 (20题: 211-230)
    {
        id: 211,
        question: "下列属于中国直辖市的是？",
        options: ["北京", "上海", "广州", "重庆", "天津"],
        answer: "ABDE",
        explanation: "中国的直辖市包括北京、上海、天津和重庆四个城市，广州是广东省的省会。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的直辖市"
    },
    {
        id: 212,
        question: "下列属于世界四大洋的是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋", "南冰洋"],
        answer: "ABCD",
        explanation: "世界四大洋包括太平洋、大西洋、印度洋和北冰洋。南冰洋通常被认为是大西洋、太平洋和印度洋的南部延伸，不是独立的大洋。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界四大洋"
    },
    {
        id: 213,
        question: "下列属于中国地形特点的是？",
        options: ["西高东低", "呈三级阶梯分布", "地形复杂多样", "以平原为主", "山脉纵横交错"],
        answer: "ABCE",
        explanation: "中国的地形特点包括西高东低、呈三级阶梯分布、地形复杂多样和山脉纵横交错。中国的地形类型中，山地面积最大，约占全国陆地总面积的33%。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的地形特点"
    },
    {
        id: 214,
        question: "下列属于中国气候特点的是？",
        options: ["气候复杂多样", "季风气候显著", "以热带气候为主", "大陆性气候强", "海洋性气候显著"],
        answer: "ABD",
        explanation: "中国的气候特点包括气候复杂多样、季风气候显著和大陆性气候强。中国地域辽阔，跨越多个温度带和干湿地区，以温带和亚热带气候为主。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国的气候特点"
    },
    {
        id: 215,
        question: "下列属于世界七大洲的是？",
        options: ["亚洲", "非洲", "欧洲", "北美洲", "南美洲", "大洋洲", "南极洲", "北极洲"],
        answer: "ABCDEFG",
        explanation: "世界七大洲包括亚洲、非洲、欧洲、北美洲、南美洲、大洋洲和南极洲。北极洲并不是一个真正的大洲，而是指北极地区的海洋和岛屿。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界七大洲"
    },
    {
        id: 216,
        question: "下列属于中国四大高原的是？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原", "帕米尔高原"],
        answer: "ABCD",
        explanation: "中国四大高原包括青藏高原、内蒙古高原、黄土高原和云贵高原。帕米尔高原位于中国与塔吉克斯坦、阿富汗等国的边境地区，不属于中国四大高原。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国四大高原"
    },
    {
        id: 217,
        question: "下列属于中国主要河流的是？",
        options: ["长江", "黄河", "珠江", "黑龙江", "塔里木河"],
        answer: "ABCDE",
        explanation: "长江、黄河、珠江、黑龙江和塔里木河都是中国的主要河流。其中，长江是中国第一大河，黄河是中国第二大河，塔里木河是中国最大的内流河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国主要河流"
    },
    {
        id: 218,
        question: "下列属于世界主要气候类型的是？",
        options: ["热带雨林气候", "热带草原气候", "热带沙漠气候", "地中海气候", "温带海洋性气候", "温带季风气候", "寒带气候"],
        answer: "ABCDEFG",
        explanation: "热带雨林气候、热带草原气候、热带沙漠气候、地中海气候、温带海洋性气候、温带季风气候和寒带气候都是世界主要的气候类型，它们分布在不同的纬度带和海陆位置。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "较难",
        knowledgePoint: "世界主要气候类型"
    },
    {
        id: 219,
        question: "下列属于中国五个少数民族自治区的是？",
        options: ["内蒙古自治区", "新疆维吾尔自治区", "广西壮族自治区", "宁夏回族自治区", "西藏自治区", "云南彝族自治区"],
        answer: "ABCDE",
        explanation: "中国的五个少数民族自治区包括内蒙古自治区、新疆维吾尔自治区、广西壮族自治区、宁夏回族自治区和西藏自治区。云南省没有彝族自治区，而是有多个彝族自治州。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的少数民族自治区"
    },
    {
        id: 220,
        question: "下列属于世界著名山脉的是？",
        options: ["喜马拉雅山脉", "安第斯山脉", "阿尔卑斯山脉", "落基山脉", "乌拉尔山脉"],
        answer: "ABCDE",
        explanation: "喜马拉雅山脉、安第斯山脉、阿尔卑斯山脉、落基山脉和乌拉尔山脉都是世界著名的山脉。其中，喜马拉雅山脉是世界上最高的山脉，安第斯山脉是世界上最长的山脉。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界著名山脉"
    },
    {
        id: 221,
        question: "下列属于中国主要淡水湖的是？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖", "巢湖", "青海湖"],
        answer: "ABCDE",
        explanation: "鄱阳湖、洞庭湖、太湖、洪泽湖和巢湖是中国的五大淡水湖。青海湖是中国最大的咸水湖，不属于淡水湖。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "中国主要淡水湖"
    },
    {
        id: 222,
        question: "下列属于世界主要半岛的是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛", "斯堪的纳维亚半岛"],
        answer: "ABCDE",
        explanation: "阿拉伯半岛、印度半岛、中南半岛、拉布拉多半岛和斯堪的纳维亚半岛都是世界主要的半岛。其中，阿拉伯半岛是世界上面积最大的半岛。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "较难",
        knowledgePoint: "世界主要半岛"
    },
    {
        id: 223,
        question: "下列属于中国主要岛屿的是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山群岛", "钓鱼岛"],
        answer: "ABCDE",
        explanation: "台湾岛、海南岛、崇明岛、舟山群岛和钓鱼岛都是中国的主要岛屿。其中，台湾岛是中国第一大岛，海南岛是中国第二大岛。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国主要岛屿"
    },
    {
        id: 224,
        question: "下列属于世界主要河流的是？",
        options: ["尼罗河", "亚马孙河", "长江", "密西西比河", "刚果河"],
        answer: "ABCDE",
        explanation: "尼罗河、亚马孙河、长江、密西西比河和刚果河都是世界主要的河流。其中，尼罗河是世界上最长的河流，亚马孙河是世界上流量最大的河流。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界主要河流"
    },
    {
        id: 225,
        question: "下列属于中国主要地形区的是？",
        options: ["东北平原", "华北平原", "长江中下游平原", "四川盆地", "柴达木盆地", "准噶尔盆地", "塔里木盆地"],
        answer: "ABCDEFG",
        explanation: "东北平原、华北平原、长江中下游平原、四川盆地、柴达木盆地、准噶尔盆地和塔里木盆地都是中国的主要地形区。其中，东北平原是中国最大的平原，塔里木盆地是中国最大的盆地。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "较难",
        knowledgePoint: "中国主要地形区"
    },
    {
        id: 226,
        question: "下列属于世界主要国家的是？",
        options: ["中国", "美国", "俄罗斯", "印度", "巴西", "澳大利亚", "加拿大"],
        answer: "ABCDEFG",
        explanation: "中国、美国、俄罗斯、印度、巴西、澳大利亚和加拿大都是世界主要国家。其中，俄罗斯是世界上面积最大的国家，中国是世界上人口最多的国家。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界主要国家"
    },
    {
        id: 227,
        question: "下列属于中国主要气候类型的是？",
        options: ["热带季风气候", "亚热带季风气候", "温带季风气候", "温带大陆性气候", "高原山地气候"],
        answer: "ABCDE",
        explanation: "热带季风气候、亚热带季风气候、温带季风气候、温带大陆性气候和高原山地气候都是中国的主要气候类型。其中，温带大陆性气候是中国分布最广的气候类型。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国主要气候类型"
    },
    {
        id: 228,
        question: "下列属于世界主要海峡的是？",
        options: ["马六甲海峡", "直布罗陀海峡", "霍尔木兹海峡", "土耳其海峡", "白令海峡"],
        answer: "ABCDE",
        explanation: "马六甲海峡、直布罗陀海峡、霍尔木兹海峡、土耳其海峡和白令海峡都是世界主要的海峡。这些海峡在全球航运和战略上具有重要地位。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "较难",
        knowledgePoint: "世界主要海峡"
    },
    {
        id: 229,
        question: "下列属于中国人口特点的是？",
        options: ["人口基数大", "人口增长速度放缓", "人口老龄化加剧", "人口分布不均", "城镇人口比例上升"],
        answer: "ABCDE",
        explanation: "中国的人口特点包括人口基数大、人口增长速度放缓、人口老龄化加剧、人口分布不均（东多西少）和城镇人口比例上升。这些特点对中国的经济和社会发展产生了深远影响。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国人口特点"
    },
    {
        id: 230,
        question: "下列属于世界主要湖泊的是？",
        options: ["里海", "苏必利尔湖", "贝加尔湖", "维多利亚湖", "死海"],
        answer: "ABCDE",
        explanation: "里海、苏必利尔湖、贝加尔湖、维多利亚湖和死海都是世界主要的湖泊。其中，里海是世界上面积最大的湖泊，贝加尔湖是世界上最深的湖泊，死海是世界上盐度最高的湖泊。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界主要湖泊"
    },
    // 新增判断题 (30题: 231-260)
    {
        id: 231,
        question: "中国的首都是北京。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "北京是中华人民共和国的首都，是全国的政治、文化和国际交往中心。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的首都"
    },
    {
        id: 232,
        question: "世界上面积最小的大洲是大洋洲。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "大洋洲是世界上面积最小的大洲，面积约897万平方公里，包括澳大利亚大陆、塔斯马尼亚岛、新西兰南北岛等岛屿。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "面积最小的大洲"
    },
    {
        id: 233,
        question: "中国最大的岛屿是海南岛。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "中国最大的岛屿是台湾岛，面积约3.6万平方公里；海南岛是中国第二大岛，面积约3.4万平方公里。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "中等",
        knowledgePoint: "中国最大的岛屿"
    },
    {
        id: 234,
        question: "世界上最长的河流是亚马孙河。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上最长的河流是尼罗河，全长约6670公里；亚马孙河是世界上流量最大的河流，全长约6400公里。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最长的河流"
    },
    {
        id: 235,
        question: "中国的地势特点是西高东低。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的地势特点是西高东低，呈三级阶梯分布。第一级阶梯是青藏高原，第二级阶梯是内蒙古高原、黄土高原、云贵高原等，第三级阶梯是东北平原、华北平原、长江中下游平原等。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "中国的地势特点"
    },
    {
        id: 236,
        question: "世界上人口最多的国家是印度。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上人口最多的国家是中国，根据最新数据，中国人口约为14.1亿；印度人口约为13.9亿，位居世界第二位。",
        category: "世界地理",
        subcategory: "人口与国家",
        difficulty: "中等",
        knowledgePoint: "世界人口最多的国家"
    },
    {
        id: 237,
        question: "中国的母亲河是黄河。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "黄河是中国的母亲河，是中华文明的重要发源地之一。黄河全长约5464公里，是中国第二长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国的母亲河"
    },
    {
        id: 238,
        question: "世界上面积最大的沙漠是撒哈拉沙漠。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "撒哈拉沙漠是世界上面积最大的沙漠，面积约910万平方公里，位于非洲北部。",
        category: "世界地理",
        subcategory: "地形与气候",
        difficulty: "基础",
        knowledgePoint: "世界最大的沙漠"
    },
    {
        id: 239,
        question: "中国的领土最南端是曾母暗沙。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "曾母暗沙是中国领土的最南端，位于南沙群岛南端，北纬3°58′，东经112°17′附近。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国领土的最南端"
    },
    {
        id: 240,
        question: "世界上最深的湖泊是贝加尔湖。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "贝加尔湖是世界上最深的湖泊，最深处达1637米，位于俄罗斯东西伯利亚南部。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界最深的湖泊"
    },
    {
        id: 241,
        question: "中国的面积最大的省级行政区是新疆维吾尔自治区。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "新疆维吾尔自治区是中国面积最大的省级行政区，面积约166万平方公里，占中国国土总面积的六分之一。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国面积最大的省级行政区"
    },
    {
        id: 242,
        question: "世界上面积最大的热带雨林分布在刚果盆地。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的热带雨林分布在亚马孙平原，面积约550万平方公里，位于南美洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "较难",
        knowledgePoint: "世界最大的热带雨林分布"
    },
    {
        id: 243,
        question: "中国的人口地理分界线是黑河-腾冲线。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "黑河-腾冲线是中国的人口地理分界线，由地理学家胡焕庸提出。该线以东地区人口稠密，以西地区人口稀疏。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国的人口地理分界线"
    },
    {
        id: 244,
        question: "世界上面积最大的半岛是印度半岛。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的半岛是阿拉伯半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "较难",
        knowledgePoint: "世界最大的半岛"
    },
    {
        id: 245,
        question: "中国的最大平原是东北平原。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "东北平原是中国最大的平原，面积约35万平方公里，由三江平原、松嫩平原和辽河平原组成。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国最大的平原"
    },
    {
        id: 246,
        question: "世界上面积最大的国家是俄罗斯。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "俄罗斯是世界上面积最大的国家，面积约1709.82万平方公里，横跨欧亚大陆。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最大的国家"
    },
    {
        id: 247,
        question: "中国的最长河流是长江。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "长江是中国最长的河流，全长约6300公里，是世界第三长河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国最长的河流"
    },
    {
        id: 248,
        question: "世界上面积最大的大洋是大西洋。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "世界上面积最大的大洋是太平洋，面积约1.8134亿平方公里，占地球表面积的三分之一。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "中等",
        knowledgePoint: "世界最大的大洋"
    },
    {
        id: 249,
        question: "中国的气候类型中，季风气候显著。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的气候类型中，季风气候显著，包括热带季风气候、亚热带季风气候和温带季风气候。季风气候的特点是夏季高温多雨，冬季寒冷干燥。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "基础",
        knowledgePoint: "中国的气候特点"
    },
    {
        id: 250,
        question: "世界上人口自然增长率最高的大洲是非洲。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "非洲是世界上人口自然增长率最高的大洲，人口自然增长率约为2.5%，远高于世界平均水平。",
        category: "世界地理",
        subcategory: "人口与国家",
        difficulty: "较难",
        knowledgePoint: "人口自然增长率最高的大洲"
    },
    {
        id: 251,
        question: "中国的五岳之首是泰山。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "泰山是中国五岳之首，有'五岳独尊'之称，位于山东省泰安市，海拔1545米。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的五岳"
    },
    {
        id: 252,
        question: "世界上流经国家最多的河流是多瑙河。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "多瑙河是世界上流经国家最多的河流，流经德国、奥地利、斯洛伐克、匈牙利、克罗地亚、塞尔维亚、保加利亚、罗马尼亚、摩尔多瓦和乌克兰等10个国家。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "较难",
        knowledgePoint: "流经国家最多的河流"
    },
    {
        id: 253,
        question: "中国的最大盆地是塔里木盆地。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "塔里木盆地是中国最大的盆地，面积约40万平方公里，位于新疆维吾尔自治区南部。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国最大的盆地"
    },
    {
        id: 254,
        question: "世界上面积最小的国家是梵蒂冈。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "梵蒂冈是世界上面积最小的国家，面积仅0.44平方公里，位于意大利罗马城西北角。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界面积最小的国家"
    },
    {
        id: 255,
        question: "中国的四大发明包括造纸术、印刷术、火药和指南针。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "中国的四大发明是造纸术、印刷术、火药和指南针，这些发明对世界文明的发展产生了深远影响。",
        category: "中国地理",
        subcategory: "历史与文化",
        difficulty: "基础",
        knowledgePoint: "中国的四大发明"
    },
    {
        id: 256,
        question: "世界上最高的山峰是珠穆朗玛峰。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "珠穆朗玛峰是世界上最高的山峰，海拔约8848.86米，位于中国与尼泊尔边境线上。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "基础",
        knowledgePoint: "世界最高的山峰"
    },
    {
        id: 257,
        question: "中国的最大岛屿群是舟山群岛。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "舟山群岛是中国最大的岛屿群，由1390个岛屿组成，位于浙江省东北部海域。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "较难",
        knowledgePoint: "中国最大的岛屿群"
    },
    {
        id: 258,
        question: "世界上面积最大的热带雨林气候区分布在亚马孙平原。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "亚马孙平原是世界上面积最大的热带雨林气候区，面积约550万平方公里，位于南美洲北部。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界最大的热带雨林气候区"
    },
    {
        id: 259,
        question: "中国的人口最多的省份是广东省。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "广东省是中国人口最多的省份，根据最新数据，广东省常住人口约为1.26亿。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国人口最多的省份"
    },
    {
        id: 260,
        question: "世界上面积最大的半岛是阿拉伯半岛。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "阿拉伯半岛是世界上面积最大的半岛，面积约322万平方公里，位于亚洲西南部。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "中等",
        knowledgePoint: "世界最大的半岛"
    },
    // 新增多项选择题 (40题: 261-300)
    {
        id: 261,
        question: "下列属于中国四大发明的是？",
        options: ["造纸术", "印刷术", "火药", "指南针", "地动仪"],
        answer: "ABCD",
        explanation: "中国的四大发明是造纸术、印刷术、火药和指南针。地动仪是东汉科学家张衡发明的测量地震的仪器，不属于四大发明。",
        category: "中国地理",
        subcategory: "历史与文化",
        difficulty: "基础",
        knowledgePoint: "中国的四大发明"
    },
    {
        id: 262,
        question: "下列属于世界四大洋的是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋", "南冰洋"],
        answer: "ABCD",
        explanation: "世界四大洋包括太平洋、大西洋、印度洋和北冰洋。南冰洋通常被认为是大西洋、太平洋和印度洋的南部延伸，不是独立的大洋。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界四大洋"
    },
    {
        id: 263,
        question: "下列属于中国五岳的是？",
        options: ["泰山", "华山", "衡山", "恒山", "嵩山", "黄山"],
        answer: "ABCDE",
        explanation: "中国五岳是东岳泰山、西岳华山、南岳衡山、北岳恒山和中岳嵩山。黄山不属于五岳，而是中国著名的风景名胜区。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的五岳"
    },
    {
        id: 264,
        question: "下列属于世界七大洲的是？",
        options: ["亚洲", "非洲", "欧洲", "北美洲", "南美洲", "大洋洲", "南极洲", "北极洲"],
        answer: "ABCDEFG",
        explanation: "世界七大洲包括亚洲、非洲、欧洲、北美洲、南美洲、大洋洲和南极洲。北极洲并不是一个真正的大洲，而是指北极地区的海洋和岛屿。",
        category: "世界地理",
        subcategory: "大洲与大洋",
        difficulty: "基础",
        knowledgePoint: "世界七大洲"
    },
    {
        id: 265,
        question: "下列属于中国主要高原的是？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原", "帕米尔高原"],
        answer: "ABCD",
        explanation: "中国四大高原包括青藏高原、内蒙古高原、黄土高原和云贵高原。帕米尔高原位于中国与塔吉克斯坦、阿富汗等国的边境地区，不属于中国四大高原。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的高原"
    },
    {
        id: 266,
        question: "下列属于世界主要气候类型的是？",
        options: ["热带雨林气候", "热带草原气候", "热带沙漠气候", "地中海气候", "温带海洋性气候"],
        answer: "ABCDE",
        explanation: "热带雨林气候、热带草原气候、热带沙漠气候、地中海气候和温带海洋性气候都是世界主要的气候类型，它们分布在不同的纬度带和海陆位置。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "中等",
        knowledgePoint: "世界主要气候类型"
    },
    {
        id: 267,
        question: "下列属于中国主要平原的是？",
        options: ["东北平原", "华北平原", "长江中下游平原", "成都平原", "珠江三角洲平原"],
        answer: "ABCDE",
        explanation: "东北平原、华北平原、长江中下游平原、成都平原和珠江三角洲平原都是中国的主要平原。其中，东北平原是中国最大的平原。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的平原"
    },
    {
        id: 268,
        question: "下列属于世界主要河流的是？",
        options: ["尼罗河", "亚马孙河", "长江", "密西西比河", "刚果河"],
        answer: "ABCDE",
        explanation: "尼罗河、亚马孙河、长江、密西西比河和刚果河都是世界主要的河流。其中，尼罗河是世界上最长的河流，亚马孙河是世界上流量最大的河流。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界主要河流"
    },
    {
        id: 269,
        question: "下列属于中国主要盆地的是？",
        options: ["塔里木盆地", "准噶尔盆地", "柴达木盆地", "四川盆地", "吐鲁番盆地"],
        answer: "ABCDE",
        explanation: "塔里木盆地、准噶尔盆地、柴达木盆地、四川盆地和吐鲁番盆地都是中国的主要盆地。其中，塔里木盆地是中国最大的盆地。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国的盆地"
    },
    {
        id: 270,
        question: "下列属于世界主要山脉的是？",
        options: ["喜马拉雅山脉", "安第斯山脉", "阿尔卑斯山脉", "落基山脉", "乌拉尔山脉"],
        answer: "ABCDE",
        explanation: "喜马拉雅山脉、安第斯山脉、阿尔卑斯山脉、落基山脉和乌拉尔山脉都是世界著名的山脉。其中，喜马拉雅山脉是世界上最高的山脉，安第斯山脉是世界上最长的山脉。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "世界主要山脉"
    },
    {
        id: 271,
        question: "下列属于中国主要淡水湖的是？",
        options: ["鄱阳湖", "洞庭湖", "太湖", "洪泽湖", "巢湖", "青海湖"],
        answer: "ABCDE",
        explanation: "鄱阳湖、洞庭湖、太湖、洪泽湖和巢湖是中国的五大淡水湖。青海湖是中国最大的咸水湖，不属于淡水湖。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "中国主要淡水湖"
    },
    {
        id: 272,
        question: "下列属于世界主要半岛的是？",
        options: ["阿拉伯半岛", "印度半岛", "中南半岛", "拉布拉多半岛", "斯堪的纳维亚半岛"],
        answer: "ABCDE",
        explanation: "阿拉伯半岛、印度半岛、中南半岛、拉布拉多半岛和斯堪的纳维亚半岛都是世界主要的半岛。其中，阿拉伯半岛是世界上面积最大的半岛。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "较难",
        knowledgePoint: "世界主要半岛"
    },
    {
        id: 273,
        question: "下列属于中国主要岛屿的是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山群岛", "钓鱼岛"],
        answer: "ABCDE",
        explanation: "台湾岛、海南岛、崇明岛、舟山群岛和钓鱼岛都是中国的主要岛屿。其中，台湾岛是中国第一大岛，海南岛是中国第二大岛。",
        category: "中国地理",
        subcategory: "岛屿与半岛",
        difficulty: "基础",
        knowledgePoint: "中国主要岛屿"
    },
    {
        id: 274,
        question: "下列属于世界主要湖泊的是？",
        options: ["里海", "苏必利尔湖", "贝加尔湖", "维多利亚湖", "死海"],
        answer: "ABCDE",
        explanation: "里海、苏必利尔湖、贝加尔湖、维多利亚湖和死海都是世界主要的湖泊。其中，里海是世界上面积最大的湖泊，贝加尔湖是世界上最深的湖泊，死海是世界上盐度最高的湖泊。",
        category: "世界地理",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "世界主要湖泊"
    },
    {
        id: 275,
        question: "下列属于中国主要气候类型的是？",
        options: ["热带季风气候", "亚热带季风气候", "温带季风气候", "温带大陆性气候", "高原山地气候"],
        answer: "ABCDE",
        explanation: "热带季风气候、亚热带季风气候、温带季风气候、温带大陆性气候和高原山地气候都是中国的主要气候类型。其中，温带大陆性气候是中国分布最广的气候类型。",
        category: "中国地理",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "中国主要气候类型"
    },
    {
        id: 276,
        question: "下列属于世界主要海峡的是？",
        options: ["马六甲海峡", "直布罗陀海峡", "霍尔木兹海峡", "土耳其海峡", "白令海峡"],
        answer: "ABCDE",
        explanation: "马六甲海峡、直布罗陀海峡、霍尔木兹海峡、土耳其海峡和白令海峡都是世界主要的海峡。这些海峡在全球航运和战略上具有重要地位。",
        category: "世界地理",
        subcategory: "海洋与海峡",
        difficulty: "较难",
        knowledgePoint: "世界主要海峡"
    },
    {
        id: 277,
        question: "下列属于中国人口特点的是？",
        options: ["人口基数大", "人口增长速度放缓", "人口老龄化加剧", "人口分布不均", "城镇人口比例上升"],
        answer: "ABCDE",
        explanation: "中国的人口特点包括人口基数大、人口增长速度放缓、人口老龄化加剧、人口分布不均（东多西少）和城镇人口比例上升。这些特点对中国的经济和社会发展产生了深远影响。",
        category: "中国地理",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国人口特点"
    },
    {
        id: 278,
        question: "下列属于世界主要国家的是？",
        options: ["中国", "美国", "俄罗斯", "印度", "巴西", "澳大利亚", "加拿大"],
        answer: "ABCDEFG",
        explanation: "中国、美国、俄罗斯、印度、巴西、澳大利亚和加拿大都是世界主要国家。其中，俄罗斯是世界上面积最大的国家，中国是世界上人口最多的国家。",
        category: "世界地理",
        subcategory: "国家与面积",
        difficulty: "基础",
        knowledgePoint: "世界主要国家"
    },
    {
        id: 279,
        question: "下列属于中国主要河流的是？",
        options: ["长江", "黄河", "珠江", "黑龙江", "塔里木河"],
        answer: "ABCDE",
        explanation: "长江、黄河、珠江、黑龙江和塔里木河都是中国的主要河流。其中，长江是中国第一大河，黄河是中国第二大河，塔里木河是中国最大的内流河。",
        category: "中国地理",
        subcategory: "河流与湖泊",
        difficulty: "基础",
        knowledgePoint: "中国主要河流"
    },
    {
        id: 280,
        question: "下列属于世界主要沙漠的是？",
        options: ["撒哈拉沙漠", "阿拉伯沙漠", "利比亚沙漠", "澳大利亚沙漠", "戈壁沙漠"],
        answer: "ABCDE",
        explanation: "撒哈拉沙漠、阿拉伯沙漠、利比亚沙漠、澳大利亚沙漠和戈壁沙漠都是世界主要的沙漠。其中，撒哈拉沙漠是世界上面积最大的沙漠。",
        category: "世界地理",
        subcategory: "地形与气候",
        difficulty: "较难",
        knowledgePoint: "世界主要沙漠"
    },
    {
        id: 281,
        question: "下列属于中国直辖市的是？",
        options: ["北京", "上海", "广州", "重庆", "天津"],
        answer: "ABDE",
        explanation: "中国的直辖市包括北京、上海、天津和重庆四个城市，广州是广东省的省会。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "中国的直辖市"
    },
    {
        id: 282,
        question: "下列属于世界主要平原的是？",
        options: ["亚马孙平原", "东欧平原", "西西伯利亚平原", "北美大平原", "拉普拉塔平原"],
        answer: "ABCDE",
        explanation: "亚马孙平原、东欧平原、西西伯利亚平原、北美大平原和拉普拉塔平原都是世界主要的平原。其中，亚马孙平原是世界上面积最大的平原。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "较难",
        knowledgePoint: "世界主要平原"
    },
    {
        id: 283,
        question: "下列属于中国五个少数民族自治区的是？",
        options: ["内蒙古自治区", "新疆维吾尔自治区", "广西壮族自治区", "宁夏回族自治区", "西藏自治区", "云南彝族自治区"],
        answer: "ABCDE",
        explanation: "中国的五个少数民族自治区包括内蒙古自治区、新疆维吾尔自治区、广西壮族自治区、宁夏回族自治区和西藏自治区。云南省没有彝族自治区，而是有多个彝族自治州。",
        category: "中国地理",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国的少数民族自治区"
    },
    {
        id: 284,
        question: "下列属于世界主要高原的是？",
        options: ["青藏高原", "帕米尔高原", "玻利维亚高原", "厄瓜多尔高原", "埃塞俄比亚高原"],
        answer: "ABCDE",
        explanation: "青藏高原、帕米尔高原、玻利维亚高原、厄瓜多尔高原和埃塞俄比亚高原都是世界主要的高原。其中，青藏高原是世界上平均海拔最高的高原，被称为'世界屋脊'。",
        category: "世界地理",
        subcategory: "地形地势",
        difficulty: "较难",
        knowledgePoint: "世界主要高原"
    },
    {
        id: 285,
        question: "下列属于中国主要山脉的是？",
        options: ["喜马拉雅山脉", "昆仑山", "天山", "秦岭", "大兴安岭"],
        answer: "ABCDE",
        explanation: "喜马拉雅山脉、昆仑山、天山、秦岭和大兴安岭都是中国的主要山脉。其中，喜马拉雅山脉是世界上最高的山脉，昆仑山是中国最长的山脉。",
        category: "中国地理",
        subcategory: "地形地势",
        difficulty: "中等",
        knowledgePoint: "中国主要山脉"
    },
    {
        id: 286,
        question: "下列属于世界主要运河的是？",
        options: ["苏伊士运河", "巴拿马运河", "京杭大运河", "基尔运河", "伊利运河"],
        answer: "ABCDE",
        explanation: "苏伊士运河、巴拿马运河、京杭大运河、基尔运河和伊利运河都是世界主要的运河。其中，京杭大运河是世界上里程最长、工程最大的古代运河。",
        category: "世界地理",
        subcategory: "交通与运河",
        difficulty: "较难",
        knowledgePoint: "世界主要运河"
    },
    {
        id: 287,
        question: "下列属于中国主要邻国的是？",
        options: ["俄罗斯", "印度", "蒙古", "朝鲜", "越南", "日本", "韩国"],
        answer: "ABCDEFG",
        explanation: "俄罗斯、印度、蒙古、朝鲜、越南、日本和韩国都是中国的主要邻国。中国是世界上邻国最多的国家之一，共有14个陆上邻国和6个海上邻国。",
        category: "中国地理",
        subcategory: "疆域与邻国",
        difficulty: "中等",
        knowledgePoint: "中国主要邻国"
    },
    {
        id: 288,
        question: "下列属于世界主要岛屿的是？",
        options: ["格陵兰岛", "新几内亚岛", "加里曼丹岛", "马达加斯加岛", "苏门答腊岛"],
        answer: "ABCDE",
        explanation: "格陵兰岛、新几内亚岛、加里曼丹岛、马达加斯加岛和苏门答腊岛都是世界主要的岛屿。其中，格陵兰岛是世界上面积最大的岛屿。",
        category: "世界地理",
        subcategory: "岛屿与半岛",
        difficulty: "较难",
        knowledgePoint: "世界主要岛屿"
    },
    {
        id: 289,
        question: "下列属于中国主要海的是？",
        options: ["渤海", "黄海", "东海", "南海", "琼州海峡"],
        answer: "ABCD",
        explanation: "渤海、黄海、东海和南海是中国的四大海。琼州海峡是中国的内海海峡，不属于海。",
        category: "中国地理",
        subcategory: "海洋与海峡",
        difficulty: "中等",
        knowledgePoint: "中国主要海"
    },
    {
        id: 290,
        question: "下列属于世界主要气候特征的是？",
        options: ["热带雨林气候全年高温多雨", "热带草原气候全年高温，分干湿两季", "热带沙漠气候全年炎热干燥", "地中海气候夏季炎热干燥，冬季温和多雨", "温带海洋性气候全年温和湿润"],
        answer: "ABCDE",
        explanation: "热带雨林气候全年高温多雨；热带草原气候全年高温，分干湿两季；热带沙漠气候全年炎热干燥；地中海气候夏季炎热干燥，冬季温和多雨；温带海洋性气候全年温和湿润。这些都是世界主要气候类型的特征。",
        category: "世界地理",
        subcategory: "气候与植被",
        difficulty: "较难",
        knowledgePoint: "世界主要气候特征"
    },
    {
        id: 291,
        question: "下列属于中国主要资源的是？",
        options: ["煤炭", "石油", "天然气", "铁矿石", "稀土"],
        answer: "ABCDE",
        explanation: "煤炭、石油、天然气、铁矿石和稀土都是中国的主要资源。中国是世界上稀土资源最丰富的国家，稀土储量约占世界总储量的30%。",
        category: "中国地理",
        subcategory: "资源与能源",
        difficulty: "中等",
        knowledgePoint: "中国主要资源"
    },
    {
        id: 292,
        question: "下列属于世界主要宗教的是？",
        options: ["基督教", "伊斯兰教", "佛教", "道教", "印度教"],
        answer: "ABCDE",
        explanation: "基督教、伊斯兰教、佛教、道教和印度教都是世界主要的宗教。其中，基督教、伊斯兰教和佛教被称为世界三大宗教。",
        category: "世界地理",
        subcategory: "宗教与文化",
        difficulty: "较难",
        knowledgePoint: "世界主要宗教"
    },
    {
        id: 293,
        question: "下列属于中国主要农作物的是？",
        options: ["水稻", "小麦", "玉米", "大豆", "棉花"],
        answer: "ABCDE",
        explanation: "水稻、小麦、玉米、大豆和棉花都是中国的主要农作物。中国是世界上最大的粮食生产国和消费国。",
        category: "中国地理",
        subcategory: "农业与生产",
        difficulty: "中等",
        knowledgePoint: "中国主要农作物"
    },
    {
        id: 294,
        question: "下列属于世界主要语言的是？",
        options: ["汉语", "英语", "西班牙语", "法语", "阿拉伯语", "俄语", "印地语"],
        answer: "ABCDEFG",
        explanation: "汉语、英语、西班牙语、法语、阿拉伯语、俄语和印地语都是世界主要的语言。其中，汉语是世界上使用人数最多的语言，英语是世界上使用范围最广的语言。",
        category: "世界地理",
        subcategory: "语言与文化",
        difficulty: "中等",
        knowledgePoint: "世界主要语言"
    },
    {
        id: 295,
        question: "下列属于中国主要工业基地的是？",
        options: ["辽中南工业基地", "京津唐工业基地", "沪宁杭工业基地", "珠江三角洲工业基地", "成渝工业基地"],
        answer: "ABCDE",
        explanation: "辽中南工业基地、京津唐工业基地、沪宁杭工业基地、珠江三角洲工业基地和成渝工业基地都是中国的主要工业基地。其中，沪宁杭工业基地是中国最大的综合性工业基地。",
        category: "中国地理",
        subcategory: "工业与经济",
        difficulty: "较难",
        knowledgePoint: "中国主要工业基地"
    },
    {
        id: 296,
        question: "下列属于世界主要经济体的是？",
        options: ["美国", "中国", "日本", "德国", "英国", "法国", "印度"],
        answer: "ABCDEFG",
        explanation: "美国、中国、日本、德国、英国、法国和印度都是世界主要经济体。根据最新数据，美国是世界第一大经济体，中国是世界第二大经济体。",
        category: "世界地理",
        subcategory: "经济与发展",
        difficulty: "中等",
        knowledgePoint: "世界主要经济体"
    },
    {
        id: 297,
        question: "下列属于中国主要铁路干线的是？",
        options: ["京广线", "京沪线", "京九线", "陇海线", "兰新线"],
        answer: "ABCDE",
        explanation: "京广线、京沪线、京九线、陇海线和兰新线都是中国的主要铁路干线。其中，京广线是中国南北向的重要铁路干线，陇海-兰新线是中国东西向的重要铁路干线。",
        category: "中国地理",
        subcategory: "交通与运输",
        difficulty: "较难",
        knowledgePoint: "中国主要铁路干线"
    },
    {
        id: 298,
        question: "下列属于世界主要港口的是？",
        options: ["上海港", "新加坡港", "深圳港", "宁波舟山港", "香港港", "釜山港", "鹿特丹港"],
        answer: "ABCDEFG",
        explanation: "上海港、新加坡港、深圳港、宁波舟山港、香港港、釜山港和鹿特丹港都是世界主要的港口。根据最新数据，上海港是世界吞吐量最大的港口。",
        category: "世界地理",
        subcategory: "交通与运输",
        difficulty: "较难",
        knowledgePoint: "世界主要港口"
    },
    {
        id: 299,
        question: "下列属于中国主要城市的是？",
        options: ["北京", "上海", "广州", "深圳", "重庆", "天津", "成都"],
        answer: "ABCDEFG",
        explanation: "北京、上海、广州、深圳、重庆、天津和成都都是中国的主要城市。其中，北京是中国的首都，上海是中国的经济中心。",
        category: "中国地理",
        subcategory: "城市与发展",
        difficulty: "基础",
        knowledgePoint: "中国主要城市"
    },
    {
        id: 300,
        question: "下列属于世界主要旅游景点的是？",
        options: ["长城", "泰姬陵", "埃菲尔铁塔", "金字塔", "自由女神像", "悉尼歌剧院", "比萨斜塔"],
        answer: "ABCDEFG",
        explanation: "长城、泰姬陵、埃菲尔铁塔、金字塔、自由女神像、悉尼歌剧院和比萨斜塔都是世界主要的旅游景点。这些景点因其独特的历史、文化或建筑价值而闻名于世。",
        category: "世界地理",
        subcategory: "旅游与文化",
        difficulty: "较难",
        knowledgePoint: "世界主要旅游景点"
    },
    // 地球与地图
    {
        id: 301,
        question: "宜昌约位于哪个经纬度？",
        options: ["30°N, 111°E", "25°N, 105°E", "35°N, 115°E", "40°N, 120°E"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，约北纬30度，东经111度。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "基础",
        knowledgePoint: "重要城市经纬度"
    },
    {
        id: 302,
        question: "本初子午线是指哪条经线？",
        options: ["0°经线", "180°经线", "20°W经线", "160°E经线"],
        answer: "A",
        explanation: "本初子午线是0°经线，是计算东西经度的起点。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "基础",
        knowledgePoint: "重要经线"
    },
    {
        id: 303,
        question: "划分东西半球的分界线是？",
        options: ["20°W和160°E组成的经线圈", "0°和180°组成的经线圈", "赤道", "北回归线"],
        answer: "A",
        explanation: "为避免将一个国家或地区划分为两个半球，国际上规定以20°W和160°E组成的经线圈作为东西半球的分界线。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "中等",
        knowledgePoint: "东西半球划分"
    },
    {
        id: 304,
        question: "在比例尺为1:100000的地图上，图上1厘米代表实地距离？",
        options: ["1千米", "10千米", "100米", "1000米"],
        answer: "A",
        explanation: "比例尺1:100000表示图上1厘米代表实地距离100000厘米，即1千米。",
        category: "地球与地图",
        subcategory: "地图三要素",
        difficulty: "中等",
        knowledgePoint: "比例尺计算"
    },
    {
        id: 305,
        question: "等高线地形图中，等高线闭合且数值中间高四周低表示的是？",
        options: ["山峰", "山谷", "山脊", "陡崖"],
        answer: "A",
        explanation: "山峰的等高线特征是闭合且数值中间高四周低；山谷是等高线向高处凸出；山脊是等高线向低处凸出；陡崖是多条等高线重合。",
        category: "地球与地图",
        subcategory: "地形图判读",
        difficulty: "基础",
        knowledgePoint: "等高线地形图判读"
    },
    // 中国地理总论
    {
        id: 306,
        question: "湖北省的简称是什么？",
        options: ["鄂", "湘", "赣", "豫"],
        answer: "A",
        explanation: "湖北省简称鄂，省会是武汉。湖南省简称湘，江西省简称赣，河南省简称豫。",
        category: "中国地理总论",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "省级行政区简称"
    },
    {
        id: 307,
        question: "中国人口分布的地理分界线是？",
        options: ["黑河-腾冲线", "秦岭-淮河线", "大兴安岭-阴山-贺兰山线", "昆仑山-祁连山-横断山线"],
        answer: "A",
        explanation: "黑河-腾冲线（胡焕庸线）是中国人口分布的地理分界线，该线东南部人口稠密，西北部人口稀疏。",
        category: "中国地理总论",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "人口分布特点"
    },
    {
        id: 308,
        question: "宜昌位于中国地形的哪两级阶梯过渡带？",
        options: ["第二级阶梯向第三级阶梯", "第一级阶梯向第二级阶梯", "第三级阶梯向海洋", "第一级阶梯内部"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，处于中国地形第二级阶梯向第三级阶梯的过渡地带。",
        category: "中国地理总论",
        subcategory: "地形与地势",
        difficulty: "中等",
        knowledgePoint: "地形阶梯分布"
    },
    {
        id: 309,
        question: "中国面积最大的盆地是？",
        options: ["塔里木盆地", "准噶尔盆地", "柴达木盆地", "四川盆地"],
        answer: "A",
        explanation: "塔里木盆地位于新疆南部，是中国面积最大的盆地，面积约53万平方千米。",
        category: "中国地理总论",
        subcategory: "地形与地势",
        difficulty: "中等",
        knowledgePoint: "主要地形区"
    },
    {
        id: 310,
        question: "宜昌属于哪种气候类型？",
        options: ["亚热带季风气候", "温带季风气候", "热带季风气候", "温带大陆性气候"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，属于亚热带季风气候，其特点是夏季高温多雨，冬季温和湿润。",
        category: "中国地理总论",
        subcategory: "气候",
        difficulty: "基础",
        knowledgePoint: "气候类型分布"
    },
    // 湖北乡土地理
    {
        id: 311,
        question: "宜昌的地理位置特点是？",
        options: ["'川鄂咽喉'，三峡门户", "长江入海口", "黄河中游", "珠江三角洲"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，长江上游与中游的分界处，被誉为'川鄂咽喉'、'三峡门户'。",
        category: "湖北乡土地理",
        subcategory: "地理位置",
        difficulty: "基础",
        knowledgePoint: "宜昌区位特征"
    },
    {
        id: 312,
        question: "宜昌的主要地形类型是？",
        options: ["山地丘陵为主", "平原为主", "高原为主", "盆地为主"],
        answer: "A",
        explanation: "宜昌地形以山地丘陵为主，地处西陵峡和巫山余脉，地势西高东低。",
        category: "湖北乡土地理",
        subcategory: "自然特征",
        difficulty: "基础",
        knowledgePoint: "宜昌地形特征"
    },
    {
        id: 313,
        question: "宜昌境内除长江外的主要河流是？",
        options: ["清江", "汉江", "湘江", "赣江"],
        answer: "A",
        explanation: "清江是宜昌境内除长江外的主要河流，流经恩施、宜昌等地，建有隔河岩水电站。",
        category: "湖北乡土地理",
        subcategory: "自然特征",
        difficulty: "中等",
        knowledgePoint: "宜昌河流分布"
    },
    {
        id: 314,
        question: "宜昌的核心产业不包括？",
        options: ["钢铁工业", "水电", "化工", "旅游"],
        answer: "A",
        explanation: "宜昌的核心产业包括水电（三峡、葛洲坝）、化工（磷化工）和旅游（三峡大坝、屈原故里）等，钢铁工业不是其核心产业。",
        category: "湖北乡土地理",
        subcategory: "人文经济",
        difficulty: "中等",
        knowledgePoint: "宜昌产业结构"
    },
    {
        id: 315,
        question: "三峡工程的主要作用不包括？",
        options: ["发电", "防洪", "航运", "灌溉"],
        answer: "D",
        explanation: "三峡工程的主要作用包括发电、防洪、航运等，灌溉不是其主要作用。",
        category: "湖北乡土地理",
        subcategory: "环境与可持续发展",
        difficulty: "中等",
        knowledgePoint: "三峡工程影响"
    },
    // 世界地理概要
    {
        id: 316,
        question: "世界上面积最大的大洲是？",
        options: ["亚洲", "非洲", "北美洲", "南美洲"],
        answer: "A",
        explanation: "亚洲是世界上面积最大的大洲，面积约4400万平方千米，占全球陆地面积的三分之一。",
        category: "世界地理概要",
        subcategory: "大洲大洋",
        difficulty: "基础",
        knowledgePoint: "七大洲面积"
    },
    {
        id: 317,
        question: "世界上面积最小的大洋是？",
        options: ["北冰洋", "印度洋", "大西洋", "太平洋"],
        answer: "A",
        explanation: "北冰洋是世界上面积最小的大洋，面积约1475万平方千米，位于地球最北端。",
        category: "世界地理概要",
        subcategory: "大洲大洋",
        difficulty: "基础",
        knowledgePoint: "四大洋面积"
    },
    // 判断题
    {
        id: 318,
        question: "赤道是南北半球的分界线。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "赤道（0°纬线）是南北半球的分界线，赤道以北为北半球，以南为南半球。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "基础",
        knowledgePoint: "南北半球划分"
    },
    {
        id: 319,
        question: "中国领土的最南端是海南岛。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "中国领土的最南端是南沙群岛的曾母暗沙，位于北纬4°附近。",
        category: "中国地理总论",
        subcategory: "疆域与行政区划",
        difficulty: "中等",
        knowledgePoint: "中国领土四至点"
    },
    // 多项选择题
    {
        id: 320,
        question: "下列属于地图三要素的是？",
        options: ["比例尺", "方向", "图例和注记", "等高线"],
        answer: "ABC",
        explanation: "地图三要素包括比例尺、方向、图例和注记。等高线是地形图上表示地形起伏的一种方式，不属于地图三要素。",
        category: "地球与地图",
        subcategory: "地图三要素",
        difficulty: "中等",
        knowledgePoint: "地图三要素"
    },
    {
        id: 321,
        question: "下列属于中国四大高原的是？",
        options: ["青藏高原", "内蒙古高原", "黄土高原", "云贵高原"],
        answer: "ABCD",
        explanation: "中国四大高原包括青藏高原、内蒙古高原、黄土高原和云贵高原。青藏高原是世界上海拔最高的高原。",
        category: "中国地理总论",
        subcategory: "地形与地势",
        difficulty: "中等",
        knowledgePoint: "四大高原"
    },
    // 更多题目...（共50道新题）
    {
        id: 350,
        question: "下列属于非可再生资源的是？",
        options: ["矿产资源", "水资源", "森林资源", "土地资源"],
        answer: "A",
        explanation: "非可再生资源是指经人类开发利用后，在相当长的时间内不可能再生的自然资源，如矿产资源。水资源、森林资源、土地资源属于可再生资源。",
        category: "自然资源与灾害防治",
        subcategory: "资源分类",
        difficulty: "基础",
        knowledgePoint: "可再生资源与非可再生资源"
    },
    // 地球与地图
    {
        id: 351,
        question: "宜昌市的地理坐标最接近以下哪个选项？",
        options: ["30°N, 111°E", "35°N, 115°E", "25°N, 105°E", "40°N, 120°E"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，其地理坐标大约为北纬30度，东经111度。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "基础",
        knowledgePoint: "重要城市经纬度"
    },
    {
        id: 352,
        question: "下列关于经线的叙述，正确的是？",
        options: ["所有经线长度相等", "经线指示东西方向", "赤道是最长的经线", "经线形状为圆圈"],
        answer: "A",
        explanation: "经线是连接南北两极的半圆，所有经线长度相等，指示南北方向。赤道是最长的纬线。",
        category: "地球与地图",
        subcategory: "地球仪与经纬网",
        difficulty: "中等",
        knowledgePoint: "经线特点"
    },
    {
        id: 353,
        question: "在地图上，指向标通常指向哪个方向？",
        options: ["北方", "南方", "东方", "西方"],
        answer: "A",
        explanation: "在地图上，指向标通常指向北方，帮助用户确定地图的方向。",
        category: "地球与地图",
        subcategory: "地图三要素",
        difficulty: "基础",
        knowledgePoint: "方向判断"
    },
    {
        id: 354,
        question: "在分层设色地形图上，绿色通常表示？",
        options: ["平原", "山地", "高原", "海洋"],
        answer: "A",
        explanation: "在分层设色地形图上，通常用绿色表示平原，黄色表示山地和高原，蓝色表示海洋。",
        category: "地球与地图",
        subcategory: "地形图判读",
        difficulty: "基础",
        knowledgePoint: "分层设色地形图"
    },
    // 中国地理总论
    {
        id: 355,
        question: "湖北省的省会城市是？",
        options: ["武汉", "宜昌", "襄阳", "黄石"],
        answer: "A",
        explanation: "湖北省的省会是武汉，位于湖北省东部，是长江中游的重要城市。",
        category: "中国地理总论",
        subcategory: "疆域与行政区划",
        difficulty: "基础",
        knowledgePoint: "省级行政区省会"
    },
    {
        id: 356,
        question: "中国人口最多的少数民族是？",
        options: ["壮族", "回族", "满族", "维吾尔族"],
        answer: "A",
        explanation: "壮族是中国人口最多的少数民族，主要分布在广西壮族自治区。",
        category: "中国地理总论",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "中国民族构成"
    },
    {
        id: 357,
        question: "下列山脉中，属于中国地势第一、二级阶梯分界线的是？",
        options: ["昆仑山", "太行山", "巫山", "雪峰山"],
        answer: "A",
        explanation: "中国地势第一、二级阶梯的分界线是昆仑山-祁连山-横断山脉。太行山、巫山、雪峰山是第二、三级阶梯的分界线。",
        category: "中国地理总论",
        subcategory: "地形与地势",
        difficulty: "中等",
        knowledgePoint: "地形阶梯分界线"
    },
    {
        id: 358,
        question: "影响宜昌气候的主要因素不包括？",
        options: ["纬度位置", "海陆位置", "地形因素", "洋流因素"],
        answer: "D",
        explanation: "宜昌位于内陆地区，不受洋流因素影响。其气候主要受纬度位置、海陆位置和地形因素的影响。",
        category: "中国地理总论",
        subcategory: "气候",
        difficulty: "中等",
        knowledgePoint: "影响气候的因素"
    },
    {
        id: 359,
        question: "长江中游和下游的分界点是？",
        options: ["湖口", "宜昌", "宜宾", "河口"],
        answer: "A",
        explanation: "长江中游和下游的分界点是江西省的湖口。宜昌是长江上游和中游的分界点。",
        category: "中国地理总论",
        subcategory: "河流与湖泊",
        difficulty: "中等",
        knowledgePoint: "长江分界点"
    },
    // 湖北乡土地理
    {
        id: 360,
        question: "宜昌市位于湖北省的哪个方位？",
        options: ["西部", "东部", "南部", "北部"],
        answer: "A",
        explanation: "宜昌市位于湖北省西部，地处长江上游与中游的分界处。",
        category: "湖北乡土地理",
        subcategory: "地理位置",
        difficulty: "基础",
        knowledgePoint: "宜昌地理位置"
    },
    {
        id: 361,
        question: "宜昌市的地势特点是？",
        options: ["西高东低", "东高西低", "南高北低", "北高南低"],
        answer: "A",
        explanation: "宜昌市地处巫山余脉和西陵峡，地势西高东低，西部为山区，东部为平原。",
        category: "湖北乡土地理",
        subcategory: "自然特征",
        difficulty: "基础",
        knowledgePoint: "宜昌地势特征"
    },
    {
        id: 362,
        question: "清江在宜昌境内的主要水电站是？",
        options: ["隔河岩水电站", "三峡水电站", "葛洲坝水电站", "丹江口水电站"],
        answer: "A",
        explanation: "隔河岩水电站位于宜昌市长阳土家族自治县境内的清江干流上，是清江梯级开发的骨干工程。",
        category: "湖北乡土地理",
        subcategory: "自然特征",
        difficulty: "中等",
        knowledgePoint: "宜昌水电资源"
    },
    {
        id: 363,
        question: "宜昌市的支柱产业不包括？",
        options: ["水电", "化工", "旅游", "钢铁"],
        answer: "D",
        explanation: "宜昌市的支柱产业包括水电、化工和旅游，钢铁不是其支柱产业。",
        category: "湖北乡土地理",
        subcategory: "人文经济",
        difficulty: "中等",
        knowledgePoint: "宜昌产业结构"
    },
    {
        id: 364,
        question: "三峡大坝位于宜昌市的哪个县？",
        options: ["夷陵区", "秭归县", "兴山县", "长阳土家族自治县"],
        answer: "B",
        explanation: "三峡大坝位于宜昌市秭归县境内，是世界上最大的水利枢纽工程。",
        category: "湖北乡土地理",
        subcategory: "环境与可持续发展",
        difficulty: "中等",
        knowledgePoint: "三峡工程位置"
    },
    // 世界地理概要
    {
        id: 365,
        question: "世界上面积最大的大洋是？",
        options: ["太平洋", "大西洋", "印度洋", "北冰洋"],
        answer: "A",
        explanation: "太平洋是世界上面积最大的大洋，面积约1.81亿平方千米，占地球表面积的近三分之一。",
        category: "世界地理概要",
        subcategory: "大洲大洋",
        difficulty: "基础",
        knowledgePoint: "四大洋面积"
    },
    {
        id: 366,
        question: "下列地区中，属于地中海气候的是？",
        options: ["地中海沿岸", "亚马孙平原", "撒哈拉沙漠", "东南亚地区"],
        answer: "A",
        explanation: "地中海气候主要分布在南北纬30°-40°的大陆西岸，以地中海沿岸地区最为典型，其特点是夏季炎热干燥，冬季温和多雨。",
        category: "世界地理概要",
        subcategory: "气候类型",
        difficulty: "中等",
        knowledgePoint: "气候类型分布"
    },
    // 判断题
    {
        id: 367,
        question: "宜昌是长江上游和中游的分界点。",
        options: ["正确", "错误"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，是长江上游和中游的分界点。长江中游和下游的分界点是江西湖口。",
        category: "湖北乡土地理",
        subcategory: "地理位置",
        difficulty: "基础",
        knowledgePoint: "长江分界点"
    },
    {
        id: 368,
        question: "中国的人口地理分界线是秦岭-淮河一线。",
        options: ["正确", "错误"],
        answer: "B",
        explanation: "中国的人口地理分界线是黑河-腾冲线（胡焕庸线），秦岭-淮河一线是中国南方地区和北方地区的分界线。",
        category: "中国地理总论",
        subcategory: "人口与民族",
        difficulty: "中等",
        knowledgePoint: "人口分布界线"
    },
    // 多项选择题
    {
        id: 369,
        question: "下列属于宜昌市的旅游景点的是？",
        options: ["三峡大坝", "葛洲坝", "屈原故里", "神农架", "武当山"],
        answer: "ABC",
        explanation: "三峡大坝、葛洲坝和屈原故里都位于宜昌市境内。神农架位于湖北省西部，武当山位于湖北省十堰市。",
        category: "湖北乡土地理",
        subcategory: "人文经济",
        difficulty: "中等",
        knowledgePoint: "宜昌旅游资源"
    },
    {
        id: 370,
        question: "下列属于中国四大盆地的是？",
        options: ["塔里木盆地", "准噶尔盆地", "柴达木盆地", "四川盆地", "吐鲁番盆地"],
        answer: "ABCD",
        explanation: "中国四大盆地包括塔里木盆地、准噶尔盆地、柴达木盆地和四川盆地。吐鲁番盆地是中国陆地最低点，但不属于四大盆地。",
        category: "中国地理总论",
        subcategory: "地形与地势",
        difficulty: "中等",
        knowledgePoint: "四大盆地"
    },
    // 区域发展与合作
    {
        id: 371,
        question: "宜昌属于中国四大地理区域中的哪个地区？",
        options: ["南方地区", "北方地区", "西北地区", "青藏地区"],
        answer: "A",
        explanation: "宜昌位于湖北省西部，属于秦岭-淮河一线以南的南方地区。",
        category: "区域发展与合作",
        subcategory: "中国四大地理区域",
        difficulty: "基础",
        knowledgePoint: "四大地理区域划分"
    },
    {
        id: 372,
        question: "长江经济带的发展定位不包括？",
        options: ["生态优先", "绿色发展", "高速增长", "共抓大保护、不搞大开发"],
        answer: "C",
        explanation: "长江经济带的发展定位是生态优先、绿色发展，共抓大保护、不搞大开发，而不是追求高速增长。",
        category: "区域发展与合作",
        subcategory: "长江经济带战略",
        difficulty: "中等",
        knowledgePoint: "长江经济带战略"
    },
    // 自然资源与灾害防治
    {
        id: 373,
        question: "宜昌市常见的自然灾害不包括？",
        options: ["滑坡", "泥石流", "台风", "洪涝"],
        answer: "C",
        explanation: "宜昌市位于山区，夏季降水集中，容易发生滑坡、泥石流和洪涝灾害。台风主要影响中国东南沿海地区，宜昌受台风影响较小。",
        category: "自然资源与灾害防治",
        subcategory: "自然灾害",
        difficulty: "中等",
        knowledgePoint: "宜昌自然灾害"
  },
  // 374-399题补全开始
  {
    id: 374,
    question: "宜昌市的经纬度大约是？",
    options: ["20°N, 100°E", "30°N, 111°E", "40°N, 120°E", "30°S, 111°W"],
    answer: "B",
    explanation: "宜昌市大约位于北纬30度，东经111度。",
    category: "地球与地图",
    subcategory: "地球仪与经纬网",
    difficulty: "基础",
    knowledgePoint: "宜昌经纬度"
  },
  {
    id: 375,
    question: "划分东西半球的分界线是？",
    options: ["赤道", "本初子午线", "20°W和160°E组成的经线圈", "180°经线"],
    answer: "C",
    explanation: "东西半球的分界线是20°W和160°E组成的经线圈。",
    category: "地球与地图",
    subcategory: "地球仪与经纬网",
    difficulty: "基础",
    knowledgePoint: "东西半球划分"
  },
  {
    id: 376,
    question: "在地图上，指向标通常指向？",
    options: ["东", "南", "西", "北"],
    answer: "D",
    explanation: "在地图上，指向标通常指向北方。",
    category: "地球与地图",
    subcategory: "地图三要素",
    difficulty: "基础",
    knowledgePoint: "方向判断"
  },
  {
    id: 377,
    question: "等高线地形图中，等高线闭合且数值中间高四周低表示的是？",
    options: ["山谷", "山脊", "山峰", "鞍部"],
    answer: "C",
    explanation: "等高线闭合且数值中间高四周低表示山峰。",
    category: "地球与地图",
    subcategory: "地形图判读",
    difficulty: "基础",
    knowledgePoint: "等高线地形识别"
  },
  {
    id: 378,
    question: "湖北省的简称是？",
    options: ["湘", "鄂", "赣", "豫"],
    answer: "B",
    explanation: "湖北省的简称是鄂，省会是武汉。",
    category: "中国地理总论",
    subcategory: "疆域与行政区划",
    difficulty: "基础",
    knowledgePoint: "省级行政区简称"
  },
  {
    id: 379,
    question: "中国人口地理分界线是？",
    options: ["秦岭-淮河一线", "黑河-腾冲一线", "大兴安岭-太行山-巫山-雪峰山一线", "昆仑山-祁连山-横断山脉一线"],
    answer: "B",
    explanation: "中国人口地理分界线是黑河-腾冲一线，也称为胡焕庸线。",
    category: "中国地理总论",
    subcategory: "人口与民族",
    difficulty: "中等",
    knowledgePoint: "人口分布"
  },
  {
    id: 380,
    question: "宜昌市位于我国地势的第几级阶梯？",
    options: ["第一级阶梯", "第二级阶梯", "第三级阶梯", "第二级阶梯向第三级阶梯过渡带"],
    answer: "D",
    explanation: "宜昌市位于我国地势的第二级阶梯向第三级阶梯过渡带。",
    category: "中国地理总论",
    subcategory: "地形与地势",
    difficulty: "中等",
    knowledgePoint: "地势阶梯"
  },
  {
    id: 381,
    question: "宜昌市的气候类型是？",
    options: ["温带季风气候", "亚热带季风气候", "热带季风气候", "温带大陆性气候"],
    answer: "B",
    explanation: "宜昌市属于亚热带季风气候，夏季高温多雨，冬季温和湿润。",
    category: "中国地理总论",
    subcategory: "气候",
    difficulty: "中等",
    knowledgePoint: "宜昌气候类型"
  },
  {
    id: 382,
    question: "长江上、中、下游的分界点是？",
    options: ["宜昌和湖口", "宜宾和武汉", "重庆和南京", "攀枝花和上海"],
    answer: "A",
    explanation: "长江上、中游的分界点是宜昌，中、下游的分界点是湖口。",
    category: "中国地理总论",
    subcategory: "河流与湖泊",
    difficulty: "中等",
    knowledgePoint: "长江分界点"
  },
  {
    id: 383,
    question: "湖北省的行政中心是？",
    options: ["宜昌", "襄阳", "武汉", "荆州"],
    answer: "C",
    explanation: "湖北省的行政中心（省会）是武汉。",
    category: "湖北乡土地理",
    subcategory: "地理位置",
    difficulty: "基础",
    knowledgePoint: "湖北省会"
  },
  {
    id: 384,
    question: "宜昌市的地形以什么为主？",
    options: ["平原", "山地丘陵", "高原", "盆地"],
    answer: "B",
    explanation: "宜昌市的地形以山地丘陵为主，包括西陵峡、巫山余脉等。",
    category: "湖北乡土地理",
    subcategory: "自然特征",
    difficulty: "基础",
    knowledgePoint: "宜昌地形"
  },
  {
    id: 385,
    question: "宜昌市的主要河流不包括？",
    options: ["长江", "清江", "香溪河", "黄河"],
    answer: "D",
    explanation: "宜昌市的主要河流包括长江、清江、香溪河等，黄河不流经湖北。",
    category: "湖北乡土地理",
    subcategory: "自然特征",
    difficulty: "基础",
    knowledgePoint: "宜昌河流"
  },
  {
    id: 386,
    question: "宜昌市的核心产业不包括？",
    options: ["水电", "化工", "旅游", "钢铁"],
    answer: "D",
    explanation: "宜昌市的核心产业包括水电、化工、旅游等，钢铁不是其核心产业。",
    category: "湖北乡土地理",
    subcategory: "人文经济",
    difficulty: "中等",
    knowledgePoint: "宜昌产业"
  },
  {
    id: 387,
    question: "三峡工程的主要作用不包括？",
    options: ["防洪", "发电", "航运", "灌溉"],
    answer: "D",
    explanation: "三峡工程的主要作用包括防洪、发电、航运等，灌溉不是其主要作用。",
    category: "湖北乡土地理",
    subcategory: "环境与可持续发展",
    difficulty: "中等",
    knowledgePoint: "三峡工程"
  },
  {
    id: 388,
    question: "世界上最大的水电站是？",
    options: ["三峡水电站", "葛洲坝水电站", "伊泰普水电站", "阿斯旺水电站"],
    answer: "A",
    explanation: "三峡水电站是世界上最大的水电站。",
    category: "湖北乡土地理",
    subcategory: "人文经济",
    difficulty: "基础",
    knowledgePoint: "宜昌水电"
  },
  {
    id: 389,
    question: "七大洲中面积最大的是？",
    options: ["亚洲", "非洲", "北美洲", "南美洲"],
    answer: "A",
    explanation: "七大洲中面积最大的是亚洲。",
    category: "世界地理概要",
    subcategory: "大洲大洋",
    difficulty: "基础",
    knowledgePoint: "大洲面积"
  },
  {
    id: 390,
    question: "日本多火山地震的原因是？",
    options: ["位于板块内部", "位于板块交界处", "位于大陆内部", "位于高山地区"],
    answer: "B",
    explanation: "日本位于亚欧板块和太平洋板块交界处，地壳活跃，多火山地震。",
    category: "世界地理概要",
    subcategory: "板块构造",
    difficulty: "中等",
    knowledgePoint: "板块运动"
  },
  {
    id: 391,
    question: "地中海气候的特征是？",
    options: ["全年高温多雨", "夏季高温多雨，冬季寒冷干燥", "夏季炎热干燥，冬季温和多雨", "全年温和湿润"],
    answer: "C",
    explanation: "地中海气候的特征是夏季炎热干燥，冬季温和多雨。",
    category: "世界地理概要",
    subcategory: "气候类型",
    difficulty: "中等",
    knowledgePoint: "气候特征"
  },
  {
    id: 392,
    question: "中国四大地理区域中，宜昌属于？",
    options: ["北方地区", "南方地区", "西北地区", "青藏地区"],
    answer: "B",
    explanation: "宜昌位于秦岭-淮河一线以南，属于南方地区。",
    category: "区域发展与合作",
    subcategory: "中国四大地理区域",
    difficulty: "基础",
    knowledgePoint: "地理区域划分"
  },
  {
    id: 393,
    question: "长江经济带的发展定位是？",
    options: ["生态优先、绿色发展", "先污染后治理", "快速工业化", "以重工业为主"],
    answer: "A",
    explanation: "长江经济带的发展定位是'生态优先、绿色发展'。",
    category: "区域发展与合作",
    subcategory: "长江经济带战略",
    difficulty: "中等",
    knowledgePoint: "区域发展战略"
  },
  {
    id: 394,
    question: "可再生资源是指？",
    options: ["用完就没有的资源", "可以循环利用的资源", "矿产资源", "化石燃料"],
    answer: "B",
    explanation: "可再生资源是指可以循环利用或在较短时间内再生的资源，如水、森林等。",
    category: "自然资源与灾害防治",
    subcategory: "资源分类",
    difficulty: "基础",
    knowledgePoint: "资源分类"
  },
  {
    id: 395,
    question: "宜昌市常见的自然灾害有？",
    options: ["滑坡", "泥石流", "台风", "洪涝"],
    answer: "ABD",
    explanation: "宜昌市位于山区，夏季降水集中，容易发生滑坡、泥石流和洪涝等自然灾害，台风对宜昌影响较小。",
    category: "自然资源与灾害防治",
    subcategory: "自然灾害",
    difficulty: "中等",
    knowledgePoint: "宜昌自然灾害"
  },
  {
    id: 396,
    question: "比例尺1:100000表示？",
    options: ["图上1厘米代表实地距离1千米", "图上1厘米代表实地距离10千米", "图上1米代表实地距离1千米", "图上1千米代表实地距离100000千米"],
    answer: "A",
    explanation: "比例尺1:100000表示图上1厘米代表实地距离1千米（100000厘米）。",
    category: "地球与地图",
    subcategory: "地图三要素",
    difficulty: "中等",
    knowledgePoint: "比例尺计算"
  },
  {
    id: 397,
    question: "我国领土的最南端是？",
    options: ["漠河", "帕米尔高原", "曾母暗沙", "黑龙江与乌苏里江主航道中心线的相交处"],
    answer: "C",
    explanation: "我国领土的最南端是曾母暗沙。",
    category: "中国地理总论",
    subcategory: "疆域与行政区划",
    difficulty: "中等",
    knowledgePoint: "中国疆域"
  },
  {
    id: 398,
    question: "宜昌市是长江中游的枢纽城市。",
    options: ["正确", "错误"],
    answer: "A",
    explanation: "宜昌市是长江中游的枢纽城市，也是长江中上游的分界点。",
    category: "湖北乡土地理",
    subcategory: "地理位置",
    difficulty: "基础",
    knowledgePoint: "宜昌区位"
  },
  {
    id: 399,
    question: "三峡工程的首要任务是防洪。",
    options: ["正确", "错误"],
    answer: "A",
    explanation: "三峡工程的首要任务是防洪，同时还有发电、航运等综合效益。",
    category: "湖北乡土地理",
    subcategory: "环境与可持续发展",
    difficulty: "基础",
    knowledgePoint: "三峡工程"
  }
];

// 初始化函数
function initQuestions() {
    // 获取DOM元素
    window.questionContent = document.getElementById('question-content');
    window.explanationContainer = document.getElementById('explanation-container');
    window.explanationContent = document.getElementById('explanation-content');
    window.submitBtn = document.getElementById('submit-btn');
    window.nextBtn = document.getElementById('next-btn');

    // 添加按钮事件监听
    window.submitBtn.addEventListener('click', function() {
            if (window.isSubmitted || window.selectedOptions.length === 0) return;

            window.isSubmitted = true;
            window.submitBtn.disabled = true;
            window.nextBtn.disabled = false;

            // 显示解析
            const currentQuestion = window.questions[window.currentQuestionIndex || 0];
            const isMultipleChoice = currentQuestion.answer.length > 1;
            let isCorrect = false;
            
            if (isMultipleChoice) {
                // 多选题：比较排序后的选项数组
                const sortedSelected = window.selectedOptions.sort().join('');
                const sortedAnswer = currentQuestion.answer.split('').sort().join('');
                isCorrect = sortedSelected === sortedAnswer;
            } else {
                // 单选题：比较单个选项
                isCorrect = window.selectedOptions[0] === currentQuestion.answer;
            }

            // 显示解析和结果
            window.explanationContent.innerHTML = `
                <p><strong>解析:</strong> ${currentQuestion.explanation}</p>
                <p>${isCorrect ? '<span class="text-green-600">正确！</span>' : '<span class="text-red-600">错误！</span>'} 正确答案是：${currentQuestion.answer}</p>
            `;
            window.explanationContainer.classList.remove('hidden');

            // 标记正确/错误选项
            document.querySelectorAll('.option-item').forEach(item => {
                const option = item.getAttribute('data-option');
                if (currentQuestion.answer.includes(option)) {
                    item.classList.add('bg-green-100', 'border-green-500');
                } else if (window.selectedOptions.includes(option)) {
                    item.classList.add('bg-red-100', 'border-red-500');
                }
            });
        });

    window.nextBtn.addEventListener('click', function() {
        if (!window.isSubmitted) return;

        // 这里简化处理，只有2道题
        const nextIndex = (window.currentQuestionIndex || 0) + 1;
        if (nextIndex < window.questions.length) {
            window.currentQuestionIndex = nextIndex;
            window.loadQuestion(nextIndex);
        } else {
            alert('已经是最后一题了！');
        }
    });

    // 加载第一题
    if (window.questions.length > 0) {
        window.currentQuestionIndex = 0;
        window.loadQuestion(0);
    } else {
        console.error('题库为空，无法显示题目');
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initQuestions);
window.initQuestions = initQuestions;