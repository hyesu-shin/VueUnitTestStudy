/**
 * @jest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils'
import HelloWorld from "../components/HelloWorld";
import Home from "../components/Home";

describe('HelloWorld', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(HelloWorld)
    })

    test('1', () => {
        // shallowMount(HelloWorld)
        expect(wrapper.vm.msg).toBe('TodoList for Hyesu');
    })
})

describe('Home', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Home)
    })

    test('1', () => {
        // shallowMount(HelloWorld)
        expect(wrapper.vm.msg).toBe('Hello Home!');
    })
})
