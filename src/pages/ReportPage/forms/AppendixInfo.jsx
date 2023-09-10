// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';

// const AppendixInfo = ({ report, setReport }) => {
//   const { t } = useTranslation();
//   const { register, handleSubmit, errors } = useForm({
//     defaultValues: {
//       appendix: report.appendix,
//     },
//   });
//   const [appendix, setAppendix] = useState(report.appendix);

//   const onSubmit = (data) => {
//     setReport({ ...report, appendix: data.appendix });
//   };

//   useEffect(() => {
//     register({ name: 'appendix' }, { required: true });
//   }, [register]);

//   return (
//     <div className="appendix-info">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label htmlFor="appendix">{t('report.appendix')}</label>
//           <textarea
//             className="form-control"
//             id="appendix"
//             name="appendix"
//             rows="3"
//             onChange={(e) => setAppendix(e.target.value)}
//             value={appendix}
//           />
//           {errors.appendix && <span className="text-danger">{t('report.appendixError')}</span>}
//         </div>
//         <div className="form-group">
//           <button type="submit" className="btn btn-primary">
//             {t('report.save')}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

const AppendixInfo = () => {
  return (
    <>
      <div>AppendixInfo</div>
    </>
  );
};

export default AppendixInfo;
