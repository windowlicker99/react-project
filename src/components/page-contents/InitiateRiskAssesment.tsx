/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, FC, useEffect } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import { ModalAside } from '@components/modules/ModalAside';
import { RelatedThreats } from '@components/modal-content/RelatedThreats';
import { DamageContent } from '@components/modal-content/DamageContents';
import { ModalFooter } from '@components/modal-content/modal-aside/ModalFooter';
import { ModalHeader } from '@components/modal-content/modal-aside/ModalHeader';
import { getFieldsValues } from '@utils/getFieldsValues';
import { setDamagePotential } from '@constants/formsElements';
import { ICurrentElement, IVehicle } from '@interfaces/interfaces';
import { RiskLevelThreatContent } from '@components/modal-content/RiskLevelThreat';
import { ResultContent } from '@components/modal-content/ResultContent';
import { RelatedControls } from '@components/modal-content/RelatedControls';
import { ListOfRelatedThreats } from '@components/page-contents/ListOfRelatedThreats';
import { getElement } from '@utils/getElement';
import { TElement } from '@interfaces/types';
import { updateVehicleRiskLevel } from '@utils/updateVehicleRiskLevel';
import { updateEcuRiskLevel } from '@utils/updateEcuRiskLevel';
import { updateDomainRiskLevel } from '@utils/updateDomainRiskLevel';
import { InitiateRiskAssessmentValidationSchema } from '@utils/validations';
import { EIRASteps } from '@interfaces/enums';

interface IInitiateRiskAssesment {
  isOpenInitiateView: boolean;
  onCloseInitiateView: () => void;
  vehicle: IVehicle;
  element: ICurrentElement;
}

type InitialValueType = {
  Confidentiality: Record<string, any>;
  Integrity: Record<string, any>;
  Availability: Record<string, any>;
  Authenticity: Record<string, any>;
};

export const InitiateRiskAssesment: FC<IInitiateRiskAssesment> = ({
  vehicle,
  isOpenInitiateView,
  onCloseInitiateView,
  element,
}) => {
  const [currentECU, setCurrentECU] = useState<TElement>(null);

  const getCurrentECU = async () => {
    const ECU = await getElement(element);
    setCurrentECU(ECU);
  };

  useEffect(() => {
    if (element) {
      getCurrentECU();
    }
  }, [element]);

  const initialValues: InitialValueType = {
    Confidentiality: getFieldsValues(Object.values(setDamagePotential)),
    Integrity: getFieldsValues(Object.values(setDamagePotential)),
    Availability: getFieldsValues(Object.values(setDamagePotential)),
    Authenticity: getFieldsValues(Object.values(setDamagePotential)),
  };

  const [step, setStep] = useState<EIRASteps>(EIRASteps.step1);

  const onCloseModal =
    ({ resetForm }: Partial<FormikProps<FormikValues>>) =>
    () => {
      resetForm();
      onCloseInitiateView();
    };

  const onConfirmClick = () => {
    onCloseInitiateView();
    setStep(EIRASteps.step1);
  };

  const onSubmit = async () => {
    await updateVehicleRiskLevel({ id: vehicle?.id, riskLevel: 'Very High', complianceLevel: 25, raProgress: 30 });
    await updateEcuRiskLevel({ id: element?.id, riskLevel: 'veryHigh', complianceLevel: 25 });
    await updateDomainRiskLevel({ id: currentECU?.domains[0].id, riskLevel: 'Very High' });
    setStep(EIRASteps.step5);
  };

  const modalStep = {
    1: {
      header: { title: 'Set Damage Potential' },
      component: <DamageContent />,
      footer: {
        applyBtn: 'Next',
      },
      onSubmit: () => setStep(EIRASteps.step2),
    },
    2: {
      header: { title: 'Related Threats ' },
      component: <RelatedThreats step={step} />,
      footer: {
        onBack: () => setStep(EIRASteps.step1),
        applyBtn: 'Next',
      },
      onSubmit: () => setStep(EIRASteps.step3),
    },
    3: {
      header: {
        title: 'Related Controls ',
      },
      component: <RelatedControls step={step} setRelatedListStep={() => setStep(EIRASteps.step6)} />,
      footer: {
        onBack: () => setStep(EIRASteps.step2),
        applyBtn: 'Next',
      },
      onSubmit: () => setStep(EIRASteps.step4),
    },
    4: {
      header: { title: 'Risk Level by Threat' },
      component: <RiskLevelThreatContent />,
      footer: {
        onBack: () => setStep(EIRASteps.step3),
        applyBtn: 'Create Tickets',
      },
      onSubmit,
    },
    5: {
      header: {},
      component: (
        <ResultContent
          title="Success"
          content={
            <>
              <strong>{currentECU?.name || ''} Risk level</strong> was defined as{' '}
              <span className="text-red">Very High</span>
            </>
          }
          onConfirm={onConfirmClick}
        />
      ),
      footer: {},
      onSubmit: (): null => null,
    },
    6: {
      header: { title: 'Related Threats per Control', onBack: () => setStep(EIRASteps.step3) },
      component: <ListOfRelatedThreats />,
      footer: { onBack: () => setStep(EIRASteps.step3) },
      onSubmit: (): null => null,
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={modalStep[step].onSubmit}
      enableReinitialize
      validationSchema={InitiateRiskAssessmentValidationSchema}
    >
      {({ isValid, submitForm, setTouched, ...props }) => (
        <ModalAside
          isOpen={isOpenInitiateView}
          header={<ModalHeader {...modalStep[step].header} onClose={onCloseModal(props)} step={step} maxStep={3} />}
          footer={
            step !== EIRASteps.step5 && (
              <ModalFooter
                {...modalStep[step].footer}
                onApply={() => {
                  submitForm();
                  if (isValid) {
                    setTouched({});
                  }
                }}
              />
            )
          }
        >
          {modalStep[step].component}
        </ModalAside>
      )}
    </Formik>
  );
};
