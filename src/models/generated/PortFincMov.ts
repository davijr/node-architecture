import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CompanyBook, CompanyBookId } from './CompanyBook';
import type { CompanyCostCentre, CompanyCostCentreId } from './CompanyCostCentre';
import type { DomsAccrualBasis, DomsAccrualBasisId } from './DomsAccrualBasis';
import type { DomsBankingTrading, DomsBankingTradingId } from './DomsBankingTrading';
import type { DomsCalcFrequency, DomsCalcFrequencyId } from './DomsCalcFrequency';
import type { DomsGlClass, DomsGlClassId } from './DomsGlClass';
import type { DomsLongShort, DomsLongShortId } from './DomsLongShort';
import type { DomsMarginExcessType, DomsMarginExcessTypeId } from './DomsMarginExcessType';
import type { DomsPerformingStatus, DomsPerformingStatusId } from './DomsPerformingStatus';
import type { DomsSecurityStatus, DomsSecurityStatusId } from './DomsSecurityStatus';
import type { InvptyDet, InvptyDetId } from './InvptyDet';
import type { Product, ProductId } from './Product';
import type { SysCurrency, SysCurrencyId } from './SysCurrency';
import type { SysExternalSystem, SysExternalSystemId } from './SysExternalSystem';
import type { SysUnderlying, SysUnderlyingId } from './SysUnderlying';

export interface PortFincMovAttributes {
  referenceDate: string;
  movDescription: string;
  tradeDate: string;
  sourceSystem: string;
  productCode: string;
  contractReference: string;
  longShort: string;
  partOfStructure: boolean;
  structureReference?: string;
  companyCode: string;
  costCentre: string;
  bookCode: string;
  internalDeal: boolean;
  issuerCode: number;
  glClass: string;
  bankingTrading: string;
  excludeFromNetting: boolean;
  currentStatus: string;
  fwdStart: boolean;
  fwdStartCorrection: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionFxRate?: number;
  fwdStartCorrectionUnderlying: string;
  fwdStartCorrectionUnerlyingPerc?: number;
  startDate?: string;
  issueDate?: string;
  maturityDate?: string;
  fixingNextDate?: string;
  fixingSettlementDate?: string;
  crossBorder: boolean;
  forThirdParty: boolean;
  settlementFailure: boolean;
  underlyingSecurity: string;
  underlyingCcy: string;
  curveName: string;
  floatIndexPercentage?: number;
  accrualBasis: string;
  tenorFrequency: string;
  tenorFrequencyUnit?: number;
  discountCurveName: string;
  valuationSpread?: number;
  contractSize?: number;
  rateValue?: number;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  yield?: number;
  isinCode?: string;
  securityQuantity: number;
  unitaryFutureValue?: number;
  unitaryMarketValue?: number;
  unitaryAccrualValue?: number;
  unitaryGlValue?: number;
  initialMarketValue?: number;
  notionalRate?: number;
  notional?: number;
  notionalUpdateFrequency: string;
  notionalUpdateFrequencyUnit?: number;
  futureValue?: number;
  glValue?: number;
  marketValue?: number;
  performingStatus: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  fee?: number;
  marginExcessType: string;
  marginExcess?: number;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve: string;
  fundingCost?: number;
  fundingCcy: string;
}

export type PortFincMovPk = "referenceDate" | "movDescription" | "tradeDate" | "sourceSystem" | "productCode" | "contractReference";
export type PortFincMovId = PortFincMov[PortFincMovPk];
export type PortFincMovOptionalAttributes = "structureReference" | "currentStatus" | "fwdStartCorrectionFixDate" | "fwdStartCorrectionFxRate" | "fwdStartCorrectionUnerlyingPerc" | "startDate" | "issueDate" | "maturityDate" | "fixingNextDate" | "fixingSettlementDate" | "floatIndexPercentage" | "tenorFrequency" | "tenorFrequencyUnit" | "valuationSpread" | "contractSize" | "rateValue" | "originalCreditSpread" | "actualCreditSpread" | "yield" | "isinCode" | "unitaryFutureValue" | "unitaryMarketValue" | "unitaryAccrualValue" | "unitaryGlValue" | "initialMarketValue" | "notionalRate" | "notional" | "notionalUpdateFrequencyUnit" | "futureValue" | "glValue" | "marketValue" | "performingStatus" | "pastDueDays" | "pastDueInstallments" | "fee" | "marginExcess" | "fundingProvider" | "fundingRateType" | "fundingCost";
export type PortFincMovCreationAttributes = Optional<PortFincMovAttributes, PortFincMovOptionalAttributes>;

export class PortFincMov extends Model<PortFincMovAttributes, PortFincMovCreationAttributes> implements PortFincMovAttributes {
  referenceDate!: string;
  movDescription!: string;
  tradeDate!: string;
  sourceSystem!: string;
  productCode!: string;
  contractReference!: string;
  longShort!: string;
  partOfStructure!: boolean;
  structureReference?: string;
  companyCode!: string;
  costCentre!: string;
  bookCode!: string;
  internalDeal!: boolean;
  issuerCode!: number;
  glClass!: string;
  bankingTrading!: string;
  excludeFromNetting!: boolean;
  currentStatus!: string;
  fwdStart!: boolean;
  fwdStartCorrection!: boolean;
  fwdStartCorrectionFixDate?: string;
  fwdStartCorrectionFxRate?: number;
  fwdStartCorrectionUnderlying!: string;
  fwdStartCorrectionUnerlyingPerc?: number;
  startDate?: string;
  issueDate?: string;
  maturityDate?: string;
  fixingNextDate?: string;
  fixingSettlementDate?: string;
  crossBorder!: boolean;
  forThirdParty!: boolean;
  settlementFailure!: boolean;
  underlyingSecurity!: string;
  underlyingCcy!: string;
  curveName!: string;
  floatIndexPercentage?: number;
  accrualBasis!: string;
  tenorFrequency!: string;
  tenorFrequencyUnit?: number;
  discountCurveName!: string;
  valuationSpread?: number;
  contractSize?: number;
  rateValue?: number;
  originalCreditSpread?: number;
  actualCreditSpread?: number;
  yield?: number;
  isinCode?: string;
  securityQuantity!: number;
  unitaryFutureValue?: number;
  unitaryMarketValue?: number;
  unitaryAccrualValue?: number;
  unitaryGlValue?: number;
  initialMarketValue?: number;
  notionalRate?: number;
  notional?: number;
  notionalUpdateFrequency!: string;
  notionalUpdateFrequencyUnit?: number;
  futureValue?: number;
  glValue?: number;
  marketValue?: number;
  performingStatus!: string;
  pastDueDays?: number;
  pastDueInstallments?: number;
  fee?: number;
  marginExcessType!: string;
  marginExcess?: number;
  fundingProvider?: string;
  fundingRateType?: string;
  fundingCurve!: string;
  fundingCost?: number;
  fundingCcy!: string;

  // PortFincMov belongsTo CompanyBook via bookCode
  bookCodeCompanyBook!: CompanyBook;
  getBookCodeCompanyBook!: Sequelize.BelongsToGetAssociationMixin<CompanyBook>;
  setBookCodeCompanyBook!: Sequelize.BelongsToSetAssociationMixin<CompanyBook, CompanyBookId>;
  createBookCodeCompanyBook!: Sequelize.BelongsToCreateAssociationMixin<CompanyBook>;
  // PortFincMov belongsTo CompanyCostCentre via companyCode
  companyCodeCompanyCostCentre!: CompanyCostCentre;
  getCompanyCodeCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCompanyCodeCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCompanyCodeCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFincMov belongsTo CompanyCostCentre via costCentre
  costCentreCompanyCostCentre!: CompanyCostCentre;
  getCostCentreCompanyCostCentre!: Sequelize.BelongsToGetAssociationMixin<CompanyCostCentre>;
  setCostCentreCompanyCostCentre!: Sequelize.BelongsToSetAssociationMixin<CompanyCostCentre, CompanyCostCentreId>;
  createCostCentreCompanyCostCentre!: Sequelize.BelongsToCreateAssociationMixin<CompanyCostCentre>;
  // PortFincMov belongsTo DomsAccrualBasis via accrualBasis
  accrualBasisDomsAccrualBasis!: DomsAccrualBasis;
  getAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToGetAssociationMixin<DomsAccrualBasis>;
  setAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToSetAssociationMixin<DomsAccrualBasis, DomsAccrualBasisId>;
  createAccrualBasisDomsAccrualBasis!: Sequelize.BelongsToCreateAssociationMixin<DomsAccrualBasis>;
  // PortFincMov belongsTo DomsBankingTrading via bankingTrading
  bankingTradingDomsBankingTrading!: DomsBankingTrading;
  getBankingTradingDomsBankingTrading!: Sequelize.BelongsToGetAssociationMixin<DomsBankingTrading>;
  setBankingTradingDomsBankingTrading!: Sequelize.BelongsToSetAssociationMixin<DomsBankingTrading, DomsBankingTradingId>;
  createBankingTradingDomsBankingTrading!: Sequelize.BelongsToCreateAssociationMixin<DomsBankingTrading>;
  // PortFincMov belongsTo DomsCalcFrequency via tenorFrequency
  tenorFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createTenorFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFincMov belongsTo DomsCalcFrequency via notionalUpdateFrequency
  notionalUpdateFrequencyDomsCalcFrequency!: DomsCalcFrequency;
  getNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToGetAssociationMixin<DomsCalcFrequency>;
  setNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToSetAssociationMixin<DomsCalcFrequency, DomsCalcFrequencyId>;
  createNotionalUpdateFrequencyDomsCalcFrequency!: Sequelize.BelongsToCreateAssociationMixin<DomsCalcFrequency>;
  // PortFincMov belongsTo DomsGlClass via glClass
  glClassDomsGlClass!: DomsGlClass;
  getGlClassDomsGlClass!: Sequelize.BelongsToGetAssociationMixin<DomsGlClass>;
  setGlClassDomsGlClass!: Sequelize.BelongsToSetAssociationMixin<DomsGlClass, DomsGlClassId>;
  createGlClassDomsGlClass!: Sequelize.BelongsToCreateAssociationMixin<DomsGlClass>;
  // PortFincMov belongsTo DomsLongShort via longShort
  longShortDomsLongShort!: DomsLongShort;
  getLongShortDomsLongShort!: Sequelize.BelongsToGetAssociationMixin<DomsLongShort>;
  setLongShortDomsLongShort!: Sequelize.BelongsToSetAssociationMixin<DomsLongShort, DomsLongShortId>;
  createLongShortDomsLongShort!: Sequelize.BelongsToCreateAssociationMixin<DomsLongShort>;
  // PortFincMov belongsTo DomsMarginExcessType via marginExcessType
  marginExcessTypeDomsMarginExcessType!: DomsMarginExcessType;
  getMarginExcessTypeDomsMarginExcessType!: Sequelize.BelongsToGetAssociationMixin<DomsMarginExcessType>;
  setMarginExcessTypeDomsMarginExcessType!: Sequelize.BelongsToSetAssociationMixin<DomsMarginExcessType, DomsMarginExcessTypeId>;
  createMarginExcessTypeDomsMarginExcessType!: Sequelize.BelongsToCreateAssociationMixin<DomsMarginExcessType>;
  // PortFincMov belongsTo DomsPerformingStatus via performingStatus
  performingStatusDomsPerformingStatus!: DomsPerformingStatus;
  getPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToGetAssociationMixin<DomsPerformingStatus>;
  setPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToSetAssociationMixin<DomsPerformingStatus, DomsPerformingStatusId>;
  createPerformingStatusDomsPerformingStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsPerformingStatus>;
  // PortFincMov belongsTo DomsSecurityStatus via currentStatus
  currentStatusDomsSecurityStatus!: DomsSecurityStatus;
  getCurrentStatusDomsSecurityStatus!: Sequelize.BelongsToGetAssociationMixin<DomsSecurityStatus>;
  setCurrentStatusDomsSecurityStatus!: Sequelize.BelongsToSetAssociationMixin<DomsSecurityStatus, DomsSecurityStatusId>;
  createCurrentStatusDomsSecurityStatus!: Sequelize.BelongsToCreateAssociationMixin<DomsSecurityStatus>;
  // PortFincMov belongsTo InvptyDet via issuerCode
  issuerCodeInvptyDet!: InvptyDet;
  getIssuerCodeInvptyDet!: Sequelize.BelongsToGetAssociationMixin<InvptyDet>;
  setIssuerCodeInvptyDet!: Sequelize.BelongsToSetAssociationMixin<InvptyDet, InvptyDetId>;
  createIssuerCodeInvptyDet!: Sequelize.BelongsToCreateAssociationMixin<InvptyDet>;
  // PortFincMov belongsTo Product via productCode
  productCodeProduct!: Product;
  getProductCodeProduct!: Sequelize.BelongsToGetAssociationMixin<Product>;
  setProductCodeProduct!: Sequelize.BelongsToSetAssociationMixin<Product, ProductId>;
  createProductCodeProduct!: Sequelize.BelongsToCreateAssociationMixin<Product>;
  // PortFincMov belongsTo SysCurrency via fundingCcy
  fundingCcySysCurrency!: SysCurrency;
  getFundingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setFundingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createFundingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFincMov belongsTo SysCurrency via underlyingCcy
  underlyingCcySysCurrency!: SysCurrency;
  getUnderlyingCcySysCurrency!: Sequelize.BelongsToGetAssociationMixin<SysCurrency>;
  setUnderlyingCcySysCurrency!: Sequelize.BelongsToSetAssociationMixin<SysCurrency, SysCurrencyId>;
  createUnderlyingCcySysCurrency!: Sequelize.BelongsToCreateAssociationMixin<SysCurrency>;
  // PortFincMov belongsTo SysExternalSystem via sourceSystem
  sourceSystemSysExternalSystem!: SysExternalSystem;
  getSourceSystemSysExternalSystem!: Sequelize.BelongsToGetAssociationMixin<SysExternalSystem>;
  setSourceSystemSysExternalSystem!: Sequelize.BelongsToSetAssociationMixin<SysExternalSystem, SysExternalSystemId>;
  createSourceSystemSysExternalSystem!: Sequelize.BelongsToCreateAssociationMixin<SysExternalSystem>;
  // PortFincMov belongsTo SysUnderlying via fwdStartCorrectionUnderlying
  fwdStartCorrectionUnderlyingSysUnderlying!: SysUnderlying;
  getFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFwdStartCorrectionUnderlyingSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFincMov belongsTo SysUnderlying via fundingCurve
  fundingCurveSysUnderlying!: SysUnderlying;
  getFundingCurveSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setFundingCurveSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createFundingCurveSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFincMov belongsTo SysUnderlying via discountCurveName
  discountCurveNameSysUnderlying!: SysUnderlying;
  getDiscountCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setDiscountCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createDiscountCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFincMov belongsTo SysUnderlying via underlyingSecurity
  underlyingSecuritySysUnderlying!: SysUnderlying;
  getUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createUnderlyingSecuritySysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;
  // PortFincMov belongsTo SysUnderlying via curveName
  curveNameSysUnderlying!: SysUnderlying;
  getCurveNameSysUnderlying!: Sequelize.BelongsToGetAssociationMixin<SysUnderlying>;
  setCurveNameSysUnderlying!: Sequelize.BelongsToSetAssociationMixin<SysUnderlying, SysUnderlyingId>;
  createCurveNameSysUnderlying!: Sequelize.BelongsToCreateAssociationMixin<SysUnderlying>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PortFincMov {
    return PortFincMov.init({
    referenceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'reference_date'
    },
    movDescription: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'mov_description'
    },
    tradeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'trade_date'
    },
    sourceSystem: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sys_external_system',
        key: 'source_system'
      },
      field: 'source_system'
    },
    productCode: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_code'
      },
      field: 'product_code'
    },
    contractReference: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      field: 'contract_reference'
    },
    longShort: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_long_short',
        key: 'domain'
      },
      field: 'long_short'
    },
    partOfStructure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'part_of_structure'
    },
    structureReference: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'structure_reference'
    },
    companyCode: {
      type: DataTypes.STRING(8),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'company_code'
    },
    costCentre: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_cost_centre',
        key: 'cost_centre'
      },
      field: 'cost_centre'
    },
    bookCode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      references: {
        model: 'company_book',
        key: 'book_code'
      },
      field: 'book_code'
    },
    internalDeal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'internal_deal'
    },
    issuerCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invpty_det',
        key: 'invpty_code'
      },
      field: 'issuer_code'
    },
    glClass: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_gl_class',
        key: 'domain'
      },
      field: 'gl_class'
    },
    bankingTrading: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_banking_trading',
        key: 'domain'
      },
      field: 'banking_trading'
    },
    excludeFromNetting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'exclude_from_netting'
    },
    currentStatus: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "FREE",
      references: {
        model: 'doms_security_status',
        key: 'domain'
      },
      field: 'current_status'
    },
    fwdStart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fwd_start'
    },
    fwdStartCorrection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'fwd_start_correction'
    },
    fwdStartCorrectionFixDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fwd_start_correction_fix_date'
    },
    fwdStartCorrectionFxRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fwd_start_correction_fx_rate'
    },
    fwdStartCorrectionUnderlying: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'fwd_start_correction_underlying'
    },
    fwdStartCorrectionUnerlyingPerc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'fwd_start_correction_unerlying_perc'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'start_date'
    },
    issueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'issue_date'
    },
    maturityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'maturity_date'
    },
    fixingNextDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_next_date'
    },
    fixingSettlementDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fixing_settlement_date'
    },
    crossBorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'cross_border'
    },
    forThirdParty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'for_third_party'
    },
    settlementFailure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'settlement_failure'
    },
    underlyingSecurity: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'underlying_security'
    },
    underlyingCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'underlying_ccy'
    },
    curveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'curve_name'
    },
    floatIndexPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'float_index_percentage'
    },
    accrualBasis: {
      type: DataTypes.STRING(7),
      allowNull: false,
      references: {
        model: 'doms_accrual_basis',
        key: 'domain'
      },
      field: 'accrual_basis'
    },
    tenorFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NON",
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'tenor_frequency'
    },
    tenorFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tenor_frequency_unit'
    },
    discountCurveName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'discount_curve_name'
    },
    valuationSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'valuation_spread'
    },
    contractSize: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'contract_size'
    },
    rateValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'rate_value'
    },
    originalCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'original_credit_spread'
    },
    actualCreditSpread: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'actual_credit_spread'
    },
    yield: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    isinCode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'isin_code'
    },
    securityQuantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'security_quantity'
    },
    unitaryFutureValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unitary_future_value'
    },
    unitaryMarketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unitary_market_value'
    },
    unitaryAccrualValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unitary_accrual_value'
    },
    unitaryGlValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'unitary_gl_value'
    },
    initialMarketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'initial_market_value'
    },
    notionalRate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'notional_rate'
    },
    notional: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notionalUpdateFrequency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'doms_calc_frequency',
        key: 'domain'
      },
      field: 'notional_update_frequency'
    },
    notionalUpdateFrequencyUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'notional_update_frequency_unit'
    },
    futureValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'future_value'
    },
    glValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'gl_value'
    },
    marketValue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_value'
    },
    performingStatus: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "SAFE",
      references: {
        model: 'doms_performing_status',
        key: 'domain'
      },
      field: 'performing_status'
    },
    pastDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'past_due_days'
    },
    pastDueInstallments: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'past_due_installments'
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    marginExcessType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'doms_margin_excess_type',
        key: 'domain'
      },
      field: 'margin_excess_type'
    },
    marginExcess: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'margin_excess'
    },
    fundingProvider: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'funding_provider'
    },
    fundingRateType: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'funding_rate_type'
    },
    fundingCurve: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'sys_underlying',
        key: 'underlying_code'
      },
      field: 'funding_curve'
    },
    fundingCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'funding_cost'
    },
    fundingCcy: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'sys_currency',
        key: 'currency_code'
      },
      field: 'funding_ccy'
    }
  }, {
    sequelize,
    tableName: 'port_finc_mov',
    schema: 'bzdf',
    timestamps: false,
    indexes: [
      {
        name: "PK-PORT_FINC_MOV",
        unique: true,
        fields: [
          { name: "reference_date" },
          { name: "mov_description" },
          { name: "trade_date" },
          { name: "source_system" },
          { name: "product_code" },
          { name: "contract_reference" },
        ]
      },
    ]
  });
  }
}
