import * as THREE from "three"
import Experience from "../Experience.js"

export default class Floor {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.setGeometry()
		this.setTextures()
		this.setMaterial()
		this.setMesh()
	}

	setGeometry() {
		this.geometry = new THREE.PlaneGeometry(5, 5, 100, 100)
	}

	setTextures() {
		this.textures = {}

		this.textures.color = this.resources.items.pebblesColorTexture
		this.textures.color.encoding = THREE.sRGBEncoding
		this.textures.color.repeat.set(1.5, 1.5)
		this.textures.color.wrapS = THREE.RepeatWrapping
		this.textures.color.wrapT = THREE.RepeatWrapping

		this.textures.normal = this.resources.items.pebblesNormalTexture
		this.textures.normal.repeat.set(1.5, 1.5)
		this.textures.normal.wrapS = THREE.RepeatWrapping
		this.textures.normal.wrapT = THREE.RepeatWrapping

		this.textures.ao = this.resources.items.pebblesAOTexture
		this.textures.ao.repeat.set(1.5, 1.5)
		this.textures.ao.wrapS = THREE.RepeatWrapping
		this.textures.ao.wrapT = THREE.RepeatWrapping

		this.textures.height = this.resources.items.pebblesHeightTexture
		this.textures.height.repeat.set(1.5, 1.5)
		this.textures.height.wrapS = THREE.RepeatWrapping
		this.textures.height.wrapT = THREE.RepeatWrapping

		this.textures.roughness = this.resources.items.pebblesRoughnessTexture
		this.textures.roughness.repeat.set(1.5, 1.5)
		this.textures.roughness.wrapS = THREE.RepeatWrapping
		this.textures.roughness.wrapT = THREE.RepeatWrapping
	}

	setMaterial() {
		this.material = new THREE.MeshStandardMaterial({
			map: this.textures.color,
			normalMap: this.textures.normal,
			aoMap: this.textures.ao,
			heightMap: this.textures.height,
			roughnessMap: this.textures.roughness,
			// side: THREE.DoubleSide,
			metalness: 0,
		})
	}

	setMesh() {
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.rotation.x = -Math.PI * 0.5
		this.mesh.receiveShadow = true

		this.mesh.geometry.setAttribute(
			"uv2",
			new THREE.Float32BufferAttribute(
				this.mesh.geometry.attributes.uv.array,
				2
			)
		)

		this.scene.add(this.mesh)
	}
}