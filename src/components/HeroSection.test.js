import { mount } from '@vue/test-utils';
import HeroSection from './HeroSection.vue';
import { vi } from 'vitest';

describe('HeroSection.vue', () => {
  describe('observeElements', () => {
    it('should apply fade-in-up animation to elements with fade-in-up class when they enter viewport', async () => {
      // Mock IntersectionObserver
      const mockObserve = vi.fn();
      const mockIntersectionObserver = vi.fn(() => ({
        observe: mockObserve,
        disconnect: vi.fn(),
      }));
      global.IntersectionObserver = mockIntersectionObserver;

      // Mount the component
      const wrapper = mount(HeroSection);

      // Wait for mounted hook and setTimeout to complete
      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 150));

      // Verify IntersectionObserver was created
      expect(mockIntersectionObserver).toHaveBeenCalled();

      // Get the callback function passed to IntersectionObserver
      const observerCallback = mockIntersectionObserver.mock.calls[0][0];

      // Create a mock element
      const mockElement = document.createElement('div');
      mockElement.classList.add('fade-in-up');
      document.body.appendChild(mockElement);

      // Create mock entry
      const mockEntry = {
        target: mockElement,
        isIntersecting: true,
      };

      // Call the observer callback with our mock entry
      observerCallback([mockEntry]);

      // Verify animation properties were set
      expect(mockElement.style.animationDelay).toMatch(/^0\.[0-9]+s$/); // Should be a random delay between 0-0.3s
      expect(mockElement.classList.contains('fade-in-up')).toBe(true);

      // Clean up
      document.body.removeChild(mockElement);
    });

    it('should not apply animation to elements not in viewport', async () => {
      const mockObserve = vi.fn();
      const mockIntersectionObserver = vi.fn(() => ({
        observe: mockObserve,
        disconnect: vi.fn(),
      }));
      global.IntersectionObserver = mockIntersectionObserver;

      const wrapper = mount(HeroSection);
      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 150));

      const observerCallback = mockIntersectionObserver.mock.calls[0][0];
      const mockElement = document.createElement('div');
      mockElement.classList.add('fade-in-up');
      document.body.appendChild(mockElement);

      const mockEntry = {
        target: mockElement,
        isIntersecting: false,
      };

      observerCallback([mockEntry]);

      expect(mockElement.style.animationDelay).toBe('');
      document.body.removeChild(mockElement);
    });

    it('should clean up observers when component is destroyed', async () => {
      const mockDisconnect = vi.fn();
      const mockIntersectionObserver = vi.fn(() => ({
        observe: vi.fn(),
        disconnect: mockDisconnect,
      }));
      global.IntersectionObserver = mockIntersectionObserver;

      const wrapper = mount(HeroSection);
      await wrapper.vm.$nextTick();
      await new Promise(resolve => setTimeout(resolve, 150));
      
      wrapper.unmount();
      expect(mockDisconnect).toHaveBeenCalled();
    });
  });
});