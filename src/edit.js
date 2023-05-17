import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({ 
      className: 'uncommon-scroll-columns',
    }) }>
			<InnerBlocks
        allowedBlocks={['core/group', 'core/columns', 'core/column', 'core/image', 'core/paragraph', 'core/heading']}
        template={[
          ['core/heading', { className: 'uncommon-scroll-columns-heading' }],
          ['core/columns', { className: 'uncommon-scroll-columns-columns' }, [
            ['core/column', { className: 'uncommon-scroll-columns-columns-column' }, [
              ['core/columns', { className: 'uncommon-scroll-columns-columns-column-innercolumns' }, [
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/paragraph', {}]
                ]],
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/image', {}]
                ]]
              ]]
            ]],
            ['core/column', { className: 'uncommon-scroll-columns-columns-column' }, [
              ['core/columns', { className: 'uncommon-scroll-columns-columns-column-innercolumns' }, [
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/paragraph', {}]
                ]],
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/image', {}]
                ]]
              ]]
            ]],
            ['core/column', { className: 'uncommon-scroll-columns-columns-column' }, [
              ['core/columns', { className: 'uncommon-scroll-columns-columns-column-innercolumns' }, [
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/paragraph', {}]
                ]],
                ['core/column', { className: 'uncommon-scroll-columns-columns-column-innercolumns-column' }, [
                  ['core/image', {}]
                ]]
              ]]
            ]]
          ]]
        ]}
        templateLock={'all'}
      />
		</div>
	);
}
