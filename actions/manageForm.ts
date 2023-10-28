import Vue from 'vue';
import { FormRequestResponse, UpdateResponse, RequestParams, Field, Block } from '@imagina/qform/contracts/';

const crud = Vue.prototype.$crud
const API_FORMS = 'apiRoutes.qform.forms'
const API_BLOCKS = 'apiRoutes.qform.blocks'
const API_FIELDS = 'apiRoutes.qform.formFields'
const PARAMS_INCLUDE = 'blocks.fields';

export const getForm = async (id, refresh=false): Promise<FormRequestResponse> => {
    try {
        const requestParams: RequestParams = {
            refresh: refresh,
            params: {
                include: PARAMS_INCLUDE,
            },
        };
    
        return crud
            .show(API_FORMS, id, requestParams);
    } catch (error) {
        console.log(error);
        return {
            data: {
                id: 0,
                title: '',
                systemName: '',
                blocks: [],
                active:0,
                createdAt: '',
                embed: '',
                order: null,
                parentId: null,
                formType: 0,
                options: {},
                updatedAt: '',
                url: '',
                fields: [],
            }
        }
    }
    
}

export const createBlock = async (formId, sortOrder): Promise<Block> => {
    return crud
        .create(API_BLOCKS, { formId, sortOrder })
        .then(response => response)
        .catch(err => { throw new Error(err) })
}

export const createField = async (data): Promise<Field> => {
    return crud
        .create(API_FIELDS, data)
        .then(response => response)
        .catch(err => { throw new Error(err) })
}

export const updateBlock = async({ data }: { data: object }): Promise<UpdateResponse> => {
    const ROUTE_REFERENCE = 'apiRoutes.qform.formBlocks'

    return crud.put(ROUTE_REFERENCE, data)
        .then(response => response)
        .catch(err => { throw new Error(err) })
}

export const updateField = async({ data }: { data: object }): Promise<UpdateResponse> => {
    return crud
        .put(API_FIELDS, data)
        .then(response => response)
        .catch(err => { throw new Error(err) })
}