<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid()
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qform.entityNames.form"),
        apiRoute: 'apiRoutes.qform.forms',
        permission: 'iforms.forms',
        extraFormFields: 'iforms.crud-fields.forms',
        create: {
          title: this.$tr('iforms.cms.newForm'),
        },
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px', align: 'left'},
            {name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'left'},
            {name: 'slug', label: this.$tr('isite.cms.form.slug'), field: 'systemName', align: 'left'},
            {name: 'active', label: this.$tr('isite.cms.form.status'), field: 'active', align: 'left'},
            {
              name: 'user', label: this.$tr('isite.cms.label.user'), field: 'user', align: 'left',
              format: val => (val && val.fullName) ? val.fullName : '-'
            },
            {
              name: 'destinationEmail',
              label: this.$trp('isite.cms.label.email'),
              field: 'destinationEmail',
              align: 'left',
              classes: 'ellipsis',
              style: 'max-width : 250px',
              format: val => val ? val.join(', ') : '-'
            },

            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'right'},
          ],
          requestParams: {include: 'user'},
          filters: {
            userId: {
              value: '0',
              type: 'select',
              props: {
                label: this.$tr('isite.cms.label.user'),
                options: [
                  {label: this.$tr('isite.cms.label.all'), value: '0'}
                ],
              },
              loadOptions: {
                apiRoute: 'apiRoutes.quser.users',
                select: {label: 'fullName', id: 'id'},
              }
            }
          },
          actions: [
            {
              icon: 'fas fa-list-ol',
              color: 'info',
              route: 'qform.admin.fields.index',
              label: this.$trp('isite.cms.label.field')
            },
            {
              icon: "fa-light fa-file-code",
              action: (item) => this.$helper.copyToClipboard(item.embed, 'isite.cms.messages.copyToClipboard'),
              color: 'info',
              label: this.$trp('isite.cms.label.copyEmbedHtml'),
            }
          ]
        },
        update: {
          title: this.$tr('iforms.cms.updateForm')
        },
        delete: true,
        formLeft: {
          id: {value: ''},
          title: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
              rules: [val => !!val || this.$tr('isite.cms.message.fieldRequired')],
            }
          },
          status: {
            value: '1',
            type: 'select',
            props: {
              label: this.$tr('isite.cms.form.status'),
              options: [
                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
              ]
            },
          },
          destinationEmail: {
            value: null,
            type: 'select',
            props: {
              label: `${this.$tr('isite.cms.label.email')}`,
              useInput: true,
              useChips: true,
              multiple: true,
              hideDropdownIcon: true,
              inputDebounce: "0",
              newValueMode: "add-unique",
              outlined: true,
              dense: true,
            }
          },
          userId: {
            value: null,
            type: 'select',
            props: {
              label: this.$tr('isite.cms.label.user'),
              clearable: true,
            },
            loadOptions: {
              apiRoute: 'apiRoutes.quser.users',
              select: {label: 'fullName', id: 'id'},
            }
          },
          urlTermsAndConditions: {
            value: null,
            type: 'input',
            isFakeField: true,
            props: {
              label: `${this.$tr('iforms.cms.form.urlTermsAndConditions')}`,
            }
          },
        },
        formRight: {
          successText: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('iforms.cms.form.successText')}`,
              type: 'textarea',
              rows: "3",
            },
          },
          submitText: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('iforms.cms.form.submitText')}`,
              type: 'textarea',
              rows: "3",
            },
          },
          replyTo: {
            value: null,
            type: 'select',
            isFakeField: true,
            props: {
              vIf: this.crudInfo.typeForm == 'update',
              label: this.$tr('iforms.cms.replyTo')
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qform.fields',
              requestParams: {filter: {formId: this.crudInfo.id}},
              select: {label: 'name', id: 'id'}
            }
          },
          replyToName: {
            value: null,
            type: 'select',
            isFakeField: true,
            props: {
              vIf: this.crudInfo.typeForm == 'update',
              label: this.$tr('iforms.cms.replyToName')
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qform.fields',
              requestParams: {filter: {formId: this.crudInfo.id}},
              select: {label: 'name', id: 'id'}
            }
          }
        },
        getDataForm: (data, typeForm) => {
          return new Promise((resolve, reject) => {
            if (typeForm == 'create') {
              let defaultLocale = this.$store.state.qsiteApp.defaultLocale
              let formTitle = data[defaultLocale].title
              data.systemName = this.$helper.getSlug(formTitle)
            }
            resolve(data)
          })
        }
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  }
}
</script>
