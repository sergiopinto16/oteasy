const spm = require('../models/spmModel')
const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';



// add gas report
// app.post('/add',
const addSPM = async (req, res) => {

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;

    // TODO add client
    const { spm_type, evaluation_date,
      // question_01, question_02, question_03, question_04, question_05,
      // question_06, question_07, question_08, question_09, question_10,
      // question_11, question_12, question_13, question_14, question_15,
      // question_16, question_17, question_18, question_19, question_20,
      // question_21, question_22, question_23, question_24, question_25,
      // question_26, question_27, question_28, question_29, question_30,
      // question_31, question_32, question_33, question_34, question_35,
      // question_36, question_37, question_38, question_39, question_40,
      // question_41, question_42, question_43, question_44, question_45,
      // question_46, question_47, question_48, question_49, question_50,
      // question_51, question_52, question_53, question_54, question_55,
      // question_56, question_57, question_58, question_59, question_60,
      // question_61, question_62, question_63, question_64, question_65,
      question,
      evaluation_reason,
      // group_ps_score, group_v_score, group_a_score, group_t_score,
      // group_go_score, group_cc_score, group_me_score, group_pmi_score,
      // group_total_score,
      group_score,
      // group_ps_tscore, group_v_tscore, group_a_tscore, group_t_tscore,
      // group_go_tscore, group_cc_tscore, group_me_tscore, group_pmi_tscore,
      // group_total_tscore,
      group_tscore,
      // group_ps_comment, group_v_comment, group_a_comment, group_t_comment,
      // group_go_comment, group_cc_comment, group_me_comment, group_pmi_comment,
      // group_total_comment
      group_comment
    } = req.body;
    console.log(req.body)

    const spmAdd = await spm.create({
      spm_type, 
      author:info.id,
      utente:info.id,
      evaluation_date,
      question[01], question_02, question_03, question_04, question_05,
      question[06], question_07, question_08, question_09, question_10,
      question[11], question_12, question_13, question_14, question_15,
      question[16], question_17, question_18, question_19, question_20,
      question_21, question_22, question_23, question_24, question_25,
      question_26, question_27, question_28, question_29, question_30,
      question_31, question_32, question_33, question_34, question_35,
      question_36, question_37, question_38, question_39, question_40,
      question_41, question_42, question_43, question_44, question_45,
      question_46, question_47, question_48, question_49, question_50,
      question_51, question_52, question_53, question_54, question_55,
      question_56, question_57, question_58, question_59, question_60,
      question_61, question_62, question_63, question_64, question_65,
      evaluation_reason,
      group_ps_score, group_v_score, group_a_score, group_t_score,
      group_go_score, group_cc_score, group_me_score, group_pmi_score,
      group_total_score,
      group_ps_tscore, group_v_tscore, group_a_tscore, group_t_tscore,
      group_go_tscore, group_cc_tscore, group_me_tscore, group_pmi_tscore,
      group_total_tscore,
      group_ps_comment, group_v_comment, group_a_comment, group_t_comment,
      group_go_comment, group_cc_comment, group_me_comment, group_pmi_comment,
      group_total_comment
    });
    res.json(spmAdd);
  });

  // try {
  //     const gasReportAdd = await Gas.create({
  //         car_plate,
  //         car_km,
  //         quantity,
  //         price,
  //     });
  //     res.json(gasReportAdd);
  // } catch (e) {
  //     console.log(e);
  //     res.status(400).json(e);
  // }


}

// get all Gas Reports
// app.get('/gasReports',
const SPMs = async (req, res) => {
  const spms = await spm.find({}).sort({ createdAt: -1 })
  res.status(200).json(spms)
}



module.exports = {
  addSPM,
  SPMs,
}