import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'
import { Flex } from 'reflexbox'

const Gallery = ({ count, imgProps, photos, size, ...props }) =>
    <Base {...props}>
        <Flex
            justify="center"
            wrap
        >
            {photos.map((photo, key) => {
                if (key >= count) {
                    return null
                }

                return (
                    <Base
                        key={key}
                        m={1}
                        style={{
                            backgroundImage: `
                                url('//source.unsplash.com/${photo}/${size}x${size}')
                            `,
                            backgroundSize: 'cover',
                            height: size,
                            width: size,
                        }}
                        {...imgProps}
                    />
                )
            })}
        </Flex>
    </Base>

Gallery.defaultProps = {
    count: Infinity,
    size: 300
}

Gallery.propTypes = {
    count: PropTypes.number,
    imgProps: PropTypes.object,
    photos: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.number.isRequired
}

export default Gallery
