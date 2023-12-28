export const ds = [
  {
    id: 5001,
    caption: 'اطلاعات پرونده',
    subSystemId: 3,
    parentId: 5000,
    componentType: 3,
    componentName: 'Tab',
    sortOrder: 10,
    fetchData: '',
    submitPath: '',
    fields: [
      {
        id: '26',
        componentId: '5001',
        fieldId: '1078',
        aliasName: 'S01_file__id',
        sortOrder: 1,
        caption: 'شناسه',
        isReadOnly: true,
        isVisible: false,
        inVisibleInGrid:false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'None',
        isActive: true,
      },
      {
        id: '27',
        componentId: '5001',
        fieldId: '1079',
        aliasName: 'S01_file__fileNumber',
        sortOrder: 2,
        caption: 'شماره پرونده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '28',
        componentId: '5001',
        fieldId: '1080',
        aliasName: 'S01_file__subSystemId',
        sortOrder: 3,
        caption: 'شناسه زیرسامانه',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'None',
        isActive: true,
      },
      {
        id: '29',
        componentId: '5001',
        fieldId: '1081',
        aliasName: 'S01_file__fixedValueId0',
        sortOrder: 4,
        caption: 'شناسه مرجع رسیدگی',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '30',
        componentId: '5001',
        fieldId: '19',
        aliasName: 'S00_fixedValue__name0',
        sortOrder: 4,
        caption: 'مرجع رسیدگی',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '31',
        componentId: '5001',
        fieldId: '1082',
        aliasName: 'S01_file__fixedValueId1',
        sortOrder: 5,
        caption: 'شناسه مرحله رسیدگی',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '32',
        componentId: '5001',
        fieldId: '19',
        aliasName: 'S00_fixedValue__name1',
        sortOrder: 5,
        caption: 'مرحله رسیدگی',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '33',
        componentId: '5001',
        fieldId: '1083',
        aliasName: 'S01_file__fixedValueId2',
        sortOrder: 6,
        caption: 'شناسه وضعیت پرونده',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '34',
        componentId: '5001',
        fieldId: '19',
        aliasName: 'S00_fixedValue__name2',
        sortOrder: 6,
        caption: 'وضعیت پرونده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '35',
        componentId: '5001',
        fieldId: '1084',
        aliasName: 'S01_file__hasClass',
        sortOrder: 7,
        caption: 'کلاسه دارد',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'CheckBox',
        isActive: true,
      },
      {
        id: '36',
        componentId: '5001',
        fieldId: '1085',
        aliasName: 'S01_file__classNumber',
        sortOrder: 8,
        caption: 'شماره کلاسه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '37',
        componentId: '5001',
        fieldId: '1086',
        aliasName: 'S01_file__branchArchiveNumber',
        sortOrder: 9,
        caption: 'شماره بایگانی در شعبه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '38',
        componentId: '5001',
        fieldId: '1087',
        aliasName: 'S01_file__branchNumber',
        sortOrder: 10,
        caption: 'شماره شعبه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '39',
        componentId: '5001',
        fieldId: '1088',
        aliasName: 'S01_file__filePassword',
        sortOrder: 11,
        caption: 'رمز پرونده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '40',
        componentId: '5001',
        fieldId: '1089',
        aliasName: 'S01_file__baseDefinitionId0',
        sortOrder: 12,
        caption: 'شناسه نوع پرونده',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '41',
        componentId: '5001',
        fieldId: '7',
        aliasName: 'S00_baseDefinition__name0',
        sortOrder: 12,
        caption: 'نوع پرونده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '42',
        componentId: '5001',
        fieldId: '1090',
        aliasName: 'S01_file__fixedValueId3',
        sortOrder: 13,
        caption: 'شناسه طبقه بندی پرونده',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '43',
        componentId: '5001',
        fieldId: '19',
        aliasName: 'S00_fixedValue__name3',
        sortOrder: 13,
        caption: 'طبقه بندی پرونده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '44',
        componentId: '5001',
        fieldId: '1091',
        aliasName: 'S01_file__organizationId',
        sortOrder: 14,
        caption: 'شناسه واحد',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '45',
        componentId: '5001',
        fieldId: '28',
        aliasName: 'S00_organization__name',
        sortOrder: 14,
        caption: 'واحد',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '46',
        componentId: '5001',
        fieldId: '1092',
        aliasName: 'S01_file__isClosed',
        sortOrder: 15,
        caption: 'مختومه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'CheckBox',
        isActive: true,
      },
      {
        id: '47',
        componentId: '5001',
        fieldId: '1093',
        aliasName: 'S01_file__baseDefinitionId1',
        sortOrder: 16,
        caption: 'شناسه دلیل خاتمه',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '48',
        componentId: '5001',
        fieldId: '7',
        aliasName: 'S00_baseDefinition__name1',
        sortOrder: 16,
        caption: 'دلیل خاتمه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '49',
        componentId: '5001',
        fieldId: '1094',
        aliasName: 'S01_file__closingDescription',
        sortOrder: 17,
        caption: 'توضیحات خاتمه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '50',
        componentId: '5001',
        fieldId: '1095',
        aliasName: 'S01_file__isDeleted',
        sortOrder: 18,
        caption: 'حذف شده',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'None',
        isActive: true,
      },
    ],
  },
  {
    id: 5002,
    subSystemId: 3,
    parentId: 5000,
    componentType: 3,
    componentName: 'TabGrid',
    sortOrder: 20,
    caption: 'ابلاغیه',
    fields: [
      {
        id: '51',
        componentId: '5002',
        fieldId: '1001',
        aliasName: 'S01_announcement__id',
        sortOrder: 1,
        caption: 'شناسه',
        isReadOnly: true,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'None',
        isActive: true,
      },
      {
        id: '52',
        componentId: '5002',
        fieldId: '1002',
        aliasName: 'S01_announcement__fileId',
        sortOrder: 2,
        caption: 'شناسه پرونده',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '53',
        componentId: '5002',
        fieldId: '1003',
        aliasName: 'S01_announcement__fixedValueId1',
        sortOrder: 3,
        caption: 'شناسه مرحله رسیدگی',
        isReadOnly: false,
        isVisible: false,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '54',
        componentId: '5002',
        fieldId: '19',
        aliasName: 'S00_fixedValue__name1',
        sortOrder: 3,
        caption: 'مرحله رسیدگی',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: false,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DropDown',
        isActive: true,
      },
      {
        id: '55',
        componentId: '5002',
        fieldId: '1004',
        aliasName: 'S01_announcement__announcementNumber',
        sortOrder: 4,
        caption: 'شماره ابلاغیه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: 'Numeric',
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '56',
        componentId: '5002',
        fieldId: '1005',
        aliasName: 'S01_announcement__announcementDate',
        sortOrder: 5,
        caption: 'تاریخ ابلاغیه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DatePicker',
        isActive: true,
      },
      {
        id: '57',
        componentId: '5002',
        fieldId: '1006',
        aliasName: 'S01_announcement__announceDate',
        sortOrder: 6,
        caption: 'تاریخ ابلاغ',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DatePicker',
        isActive: true,
      },
      {
        id: '58',
        componentId: '5002',
        fieldId: '1007',
        aliasName: 'S01_announcement__proceedingsDate',
        sortOrder: 7,
        caption: 'تاریخ رسیدگی',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DatePicker',
        isActive: true,
      },
      {
        id: '59',
        componentId: '5002',
        fieldId: '1008',
        aliasName: 'S01_announcement__attendingTime',
        sortOrder: 8,
        caption: 'ساعت حضور',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '60',
        componentId: '5002',
        fieldId: '1009',
        aliasName: 'S01_announcement__secretariatNumber',
        sortOrder: 9,
        caption: 'شماره ثبت دبیرخانه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '61',
        componentId: '5002',
        fieldId: '1010',
        aliasName: 'S01_announcement__secretariatDate',
        sortOrder: 10,
        caption: 'تاریخ ثبت دبیرخانه',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'DatePicker',
        isActive: true,
      },
      {
        id: '62',
        componentId: '5002',
        fieldId: '1011',
        aliasName: 'S01_announcement__announceTopic',
        sortOrder: 11,
        caption: 'موضوع ابلاغ',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
      {
        id: '63',
        componentId: '5002',
        fieldId: '1012',
        aliasName: 'S01_announcement__attendingReason',
        sortOrder: 12,
        caption: 'علت حضور',
        isReadOnly: false,
        isVisible: true,
        isMandatory: false,
        isUnique: false,
        uniquenessCheckAPI: null,
        needToValidate: false,
        validationRule: null,
        useInSaveMethod: true,
        fetchDataAPI: null,
        masterField: null,
        uiComponentType: 'TextBox',
        isActive: true,
      },
    ],
  },
]