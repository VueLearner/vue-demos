var express = require('express');
var app = express();

app.get('/api/data', function (req, res) {
  const data = '{\n' +
    '  "Code":0,\n' +
    '  "Error":"",\n' +
    '  "Data":{\n' +
    '    "_id":"5a66eefb1e2e40e7ccaddb67",\n' +
    '    "projectName":"职位招聘",\n' +
    '    "projectItems":{\n' +
    '      "name":"职位名称",\n' +
    '      "description":"职位描述",\n' +
    '      "questions":"数码面试问题",\n' +
    '      "members":"面试官成员",\n' +
    '      "effectiveTime":"邀请有效时间",\n' +
    '      "costCenter":"部门/成本中心",\n' +
    '      "count":"预计招聘人数",\n' +
    '      "rate":"评分项",\n' +
    '      "url":"申请链接",\n' +
    '      "QRCode":"申请二维码",\n' +
    '      "descriptionTip":"任职要求及岗位职责",\n' +
    '      "questionsTip":"你最多提出10个你想了解候选人情况的问题，候选人将通过数码面试回答你的提问。",\n' +
    '      "effectiveTimeTip":"被邀请者必须要在有效时间之内完成数码面试，该时间是从邀请发送一刻开始计算，默认为7天。",\n' +
    '      "costCenterTip":"发布此项目的部门，用于公司各个部门的成本合算。",\n' +
    '      "rateTip":"确定评分类别，根据评分类别对被评价对象进行评分。"\n' +
    '    },\n' +
    '    "all":"申请",\n' +
    '    "firstRoundCount":"第一轮面试",\n' +
    '    "multipleRoundsCount":"后续面试",\n' +
    '    "UnreadCount":"未读申请",\n' +
    '    "rateItems":[\n' +
    '      "表达能力",\n' +
    '      "语言",\n' +
    '      "知识",\n' +
    '      "外形",\n' +
    '      "领导力",\n' +
    '      "经验"\n' +
    '    ],\n' +
    '    "questions":[\n' +
    '      "请介绍一下您自己",\n' +
    '      "请评价一下您前一任上级",\n' +
    '      "您觉得您有哪些优点和缺点",\n' +
    '      "在工作中遇到过的最大困难是什么，又是如何克服的？",\n' +
    '      "您选择从上一家公司离职的原因是什么？",\n' +
    '      "您希望与什么样的上级共事",\n' +
    '      "当与上级意见不统一时，您会如何去做？",\n' +
    '      "您最崇拜的人是谁？为什么？",\n' +
    '      "对于申请的岗位，您认为您的优势和不足分别是什么？",\n' +
    '      "请问如何看待加班问题",\n' +
    '      "在未来五年内，您的个人目标和职业目标分别是什么？",\n' +
    '      "请说明在人生中最失败的经历",\n' +
    '      "您的朋友是如何评价您的？",\n' +
    '      "请介绍一下您在工作中最大的成就",\n' +
    '      "请谈谈您对行业未来发展的看法"\n' +
    '    ],\n' +
    '    "positionReport":{\n' +
    '      "days":"招标评审时长",\n' +
    '      "daysTip":"招标评审时长是指招标项目发布从开始到关闭的时长",\n' +
    '      "money":"花费",\n' +
    '      "offerRate":"中标率",\n' +
    '      "offerRateTip":"中标率 = 通知中标数量（molecular） / 投标数量（denominator）",\n' +
    '      "interviewPassRate":"面试通过率",\n' +
    '      "interviewPassRateTip":"面试通过率 = 面试后中标数量（molecular） / 面试数量（denominator）",\n' +
    '      "interviewRate":"面试率",\n' +
    '      "interviewRateTip":"面试率 = 面试数量（molecular） / 候选数量（denominator）",\n' +
    '      "initialScreeningRate":"初筛通过率",\n' +
    '      "initialScreeningRateTip":"初筛通过率 = 候选数量（molecular） / 投标数量（denominator）",\n' +
    '      "completionRate":"中标完成率",\n' +
    '      "completionRateTip":"中标完成率 = 通知中标数量（molecular） / 预计中标数量（denominator）",\n' +
    '      "completionRateTip1":"中标完成率 = 通知中标数量 / 预计中标数量未设置预计中标数量"\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    '\n'
  res.write(data);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
