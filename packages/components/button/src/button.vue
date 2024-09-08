<template>
	<h1 class="text-title-page">Button</h1>
	<p class="text-body mt-4">
		Explore the rich variety of our component set in the Variants Showcase.
		Here, you'll find a comprehensive collection of component variations, each
		meticulously crafted to suit different design needs.
	</p>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 rounded-3xl bg-[var(--bg-secondary)]">
		<el-row :gutter="40">
			<el-col :xs="24">
				<el-row>
					<el-button type="primary">Primary</el-button>
					<el-button>Default</el-button>
					<el-button type="info">Tonal</el-button>
					<el-button type="success">Success</el-button>
					<el-button type="warning">Warning</el-button>
					<el-button type="danger">Danger</el-button>
					<el-button text>Text</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Primary
					</el-button>
					<el-button>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Default
					</el-button>
					<el-button type="info">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Tonal
					</el-button>
					<el-button type="success">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Success
					</el-button>
					<el-button type="warning">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Warning
					</el-button>
					<el-button type="danger">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Danger
					</el-button>
					<el-button text>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Text
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary">
						Primary
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button>
						Default
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="info">
						Tonal
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="success">
						Success
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="warning">
						Warning
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="danger">
						Danger
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button text>
						Text
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary" disabled>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Primary
					</el-button>
					<el-button disabled>Default</el-button>
					<el-button type="info" disabled>Tonal</el-button>
					<el-button type="success" disabled>Success</el-button>
					<el-button type="warning" disabled>Warning</el-button>
					<el-button type="danger" disabled>Danger</el-button>
					<el-button text disabled>
						Text
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Button size</h2>

	<div class="mt-4 p-10 rounded-3xl bg-[var(--bg-secondary)]">
		<el-row :gutter="40">
			<el-col :xs="24">
				<el-row>
					<el-button type="info" size="small">Small</el-button>
					<el-button type="info" size="small">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Small
					</el-button>
					<el-button type="info" size="small">
						Small
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary">Default</el-button>
					<el-button type="primary">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Default
					</el-button>
					<el-button type="primary">
						Default
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary" size="large">Large</el-button>
					<el-button type="primary" size="large">
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
						Large
					</el-button>
					<el-button type="primary" size="large">
						Large
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Icon button</h3>

	<div class="mt-4 p-10 rounded-3xl bg-[var(--bg-secondary)]">
		<el-row :gutter="40">
			<el-col :xs="24">
				<el-row>
					<el-button type="primary" size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="info" size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="success" size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="warning" size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="danger" size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button text size="small" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="info" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="success" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="warning" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="danger" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button text circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
				<el-row class="mt-4">
					<el-button type="primary" size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="info" size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="success" size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="warning" size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button type="danger" size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
					<el-button text size="large" circle>
						<el-icon>
							<span class="material-icons-outlined">add</span>
						</el-icon>
					</el-button>
				</el-row>
			</el-col>
		</el-row>
	</div>

	<h4 class="text-subtitle mt-8">Split</h4>

	<div class="mt-4 p-10 rounded-3xl bg-[var(--bg-secondary)]">
		<el-row :gutter="40">
			<el-col :xs="24">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-button-group>
							<el-button type="primary">Filled</el-button>
							<el-button type="primary" circle>
								<el-icon>
									<span class="material-icons-outlined">expand_more</span>
								</el-icon>
							</el-button>
						</el-button-group>
					</el-col>
					<el-col :span="12">
						<el-button-group>
							<el-button type="primary" circle>
								<el-icon>
									<span class="material-icons-outlined">edit</span>
								</el-icon>
							</el-button>
							<el-button type="primary" circle>
								<el-icon>
									<span class="material-icons-outlined">tune</span>
								</el-icon>
							</el-button>
							<el-button type="primary" circle>
								<el-icon>
									<span class="material-icons-outlined">delete</span>
								</el-icon>
							</el-button>
						</el-button-group>
					</el-col>
				</el-row>
				<el-row :gutter="20" class="mt-4">
					<el-col :span="12">
						<el-button-group>
							<el-button type="info">Filled</el-button>
							<el-button type="info" circle>
								<el-icon>
									<span class="material-icons-outlined">expand_more</span>
								</el-icon>
							</el-button>
						</el-button-group>
					</el-col>
					<el-col :span="12">
						<el-button-group>
							<el-button type="info" circle>
								<el-icon>
									<span class="material-icons-outlined">edit</span>
								</el-icon>
							</el-button>
							<el-button type="info" circle>
								<el-icon>
									<span class="material-icons-outlined">tune</span>
								</el-icon>
							</el-button>
							<el-button type="info" circle>
								<el-icon>
									<span class="material-icons-outlined">delete</span>
								</el-icon>
							</el-button>
						</el-button-group>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<style setup lang="ts"></style>
