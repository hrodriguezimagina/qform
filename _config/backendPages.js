export default {
  forms: {
		permission: null,
		activated: true,
		path: '/form/form',
		name: 'qform.admin.form.index',
    page: () => import('@imagina/qform/_layouts/admin/forms/index'),
    layout: () => import('src/layouts/master'),
		title: 'qform.sidebar.adminForm',
		icon: 'fab fa-wpforms',
    authenticated : true
	},
  formsUpdate: {
    permission: null,
    activated: true,
    path: '/form/forms/:id/edit',
    name: 'qform.admin.form.fields.create',
    page: () => import('@imagina/qform/_layouts/admin/forms/index'),
    layout: () => import('src/layouts/master'),
    title: 'qform.sidebar.adminForm',
    icon: 'fab fa-wpforms',
    authenticated : true
  },
  formsDesign: {
    permission: null,
    activated: true,
    path: '/form/form/:id',
    name: 'qform.admin.form.design',
    page: () => import('@imagina/qform/_layouts/admin/forms/design'),
    layout: () => import('src/layouts/master'),
    title: 'qform.sidebar.designForm',
    icon: 'fab fa-wpforms',
    authenticated : true
  },
  fields: {
    permission: null,
    activated: true,
    path: '/form/fields/:id',
    name: 'qform.admin.fields.index',
    page: () => import('@imagina/qform/_layouts/admin/fields/index'),
    layout: () => import('src/layouts/master'),
    title: 'qform.sidebar.adminField',
    icon: 'fas fa-grip-horizontal',
    authenticated : true
  },
  fieldsCreate: {
    permission: null,
    activated: true,
    path: '/form/fields/create/:formId',
    name: 'qform.admin.fields.create',
    page: () => import('@imagina/qform/_layouts/admin/fields/form'),
    layout: () => import('src/layouts/master'),
    title: 'qform.layout.newField',
    icon: 'fas fa-grip-horizontal',
    authenticated : true
  },
  fieldsUpdate: {
    permission: null,
    activated: true,
    path: '/form/fields/:id/update',
    name: 'qform.admin.fields.update',
    page: () => import('@imagina/qform/_layouts/admin/fields/form'),
    layout: () => import('src/layouts/master'),
    title: 'qform.layout.updateField',
    icon: 'fas fa-grip-horizontal',
    authenticated : true
  },
  leads: {
    permission: null,
		activated: true,
		path: '/form/lead',
		name: 'qform.admin.leads.index',
		page: () => import('@imagina/qform/_layouts/admin/leads/index'),
		layout: () => import('src/layouts/master'),
		title: 'qform.sidebar.adminLead',
		icon: 'fas fa-chalkboard-teacher',
		authenticated : true
	},
  leadsShow: {
    permission: null,
    activated: true,
    path: '/form/lead/:id',
    name: 'qform.admin.leads.show',
    page: () => import('@imagina/qform/_layouts/admin/leads/show'),
    layout: () => import('src/layouts/master'),
    title: 'qform.sidebar.adminLead',
    icon: 'fas fa-chalkboard-teacher',
    authenticated : true
  },
}
